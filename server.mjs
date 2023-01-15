import { config } from 'dotenv';

import app from './app.mjs';

config({ path: './config/config.env' });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${3000}`));
