import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI no definida');
  process.exit(1);
}
mongoose.connect(uri).then(() => console.log('MongoDB conectado')).catch(err => console.error(err));