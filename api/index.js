import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import chalk from 'chalk';

dotenv.config();

mongoose
   .connect(
      process.env.MONGO_CONNECTION_STRING,
   ).then(() => {
      console.log(chalk.yellow("Database Connected Successfully"));
   }).catch((err) => {
      console.log(chalk.red(err, 
         '"Error while connecting to database"'));
   });

const app = express();

app.get('/', (req, res) =>{
   res.send("Hello World");
})

app.listen(3000, () => {
   console.log(chalk.blue('Server is running on port 3000'));
}); 