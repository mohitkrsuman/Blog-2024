import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import dbconnect from './utils/db.js';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const port = process.env.PORT || 4000;
const app = express();

dotenv.config();
dbconnect();

//The express. json() function is a middleware function used in Express. js applications to parse It is the process of converting a JSON string to a JSON object for data manipulation.
app.use(express.json());

app.use('/api/user', userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || "Internal Server Error";

   res.status(statusCode).json({
      success : false,
      statusCode,
      message
   });
});

app.listen(port, () => {
   console.log(chalk.blue(`Server is running on port ${port}`));
}); 