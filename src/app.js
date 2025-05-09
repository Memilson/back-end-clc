import express from 'express';
import cors from 'cors';
import todosRoutes from './routes/todosRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.use('/todos', todosRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔊 Backend rodando na porta ${PORT}`));
