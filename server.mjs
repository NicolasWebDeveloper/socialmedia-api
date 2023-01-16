import { config } from 'dotenv';
import mongoose from 'mongoose';

import app from './app.mjs';

config({ path: './config/config.env' });

(async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log('Connected to Database!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${3000}`));
