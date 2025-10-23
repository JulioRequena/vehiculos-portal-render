import dotenv from 'dotenv';
import app from './app.js';
import './infrastructure/database/mongoose.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));