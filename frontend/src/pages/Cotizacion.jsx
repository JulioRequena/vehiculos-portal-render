import React,{useState} from 'react';
import axios from 'axios';
export default function Cotizacion(){
  const [modelo,setModelo]=useState('');
  const [precio,setPrecio]=useState('');
  const [meses,setMeses]=useState(12);
  const [tasa,setTasa]=useState(0.12);
  const [resultado,setResultado]=useState(null);
  const [error,setError]=useState(null);
  const handleCotizar=async()=>{
    setError(null);setResultado(null);
    try{
      const apiUrl=import.meta.env.VITE_API_URL||'http://localhost:3000/api/cotizar';
      const res=await axios.post(apiUrl,{modelo,precio,meses:Number(meses),tasa:Number(tasa)});
      setResultado(res.data);
    }catch(err){setError(err.response?.data?.error||err.message);}
  };
  return(<div><h2>Cotización</h2><div style={{display:'flex',flexDirection:'column',gap:8,maxWidth:400}}>
  <input placeholder='Modelo' value={modelo} onChange={e=>setModelo(e.target.value)}/>
  <input placeholder='Precio' value={precio} onChange={e=>setPrecio(e.target.value)}/>
  <input type='number' placeholder='Meses' value={meses} onChange={e=>setMeses(e.target.value)}/>
  <input placeholder='Tasa' value={tasa} onChange={e=>setTasa(e.target.value)}/>
  <button onClick={handleCotizar}>Cotizar</button>
  {error&&<div style={{color:'red'}}>{error}</div>}
  {resultado&&<div><p>Modelo:{resultado.modelo}</p><p>Meses:{resultado.meses}</p><p>Cuota:${resultado.cuota.toFixed(2)}</p></div>}
  </div></div>);
}