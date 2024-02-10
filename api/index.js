import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import dbconnect from './utils/db.js';

dotenv.config();
dbconnect();

const app = express();

app.get('/', (req, res) =>{
   res.send("Hello World");
})

app.listen(3000, () => {
   console.log(chalk.blue('Server is running on port 3000'));
}); 