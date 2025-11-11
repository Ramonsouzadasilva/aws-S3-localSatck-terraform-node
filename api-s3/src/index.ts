import express from 'express';
import uploadRoutes from './adapters/http/routes/routes';

const app = express();
app.use(express.json());
app.use('/upload', uploadRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
