import dotenv from 'dotenv';
import express from 'express';
import { sequelize } from './sequelize.config';
import titlesRouter from './routes/titles';
import authorsRouter from './routes/authors';
import formatsRouter from './routes/formats';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/titles', titlesRouter);
app.use('/authors', authorsRouter);
app.use('/formats', formatsRouter);

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});


