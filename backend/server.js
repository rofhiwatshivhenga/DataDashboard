import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dataRoutes from './routes/dataRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/data', dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
