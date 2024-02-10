import mongoose from 'mongoose';
import chalk from 'chalk';

// const dbconnect = new Promise((resolve, reject) => {
//     const isConnect =  mongoose.connect(process.env.MONGO_CONNECTION_STRING);
//     if(isConnect){
//         resolve("Database Connected Successfully");
//     }else{
//         reject("Error while connecting to database");
//     }
// });

// dbconnect.then((msg) => {
//     console.log(msg);
// }).catch((err) => {
//     console.log(err);
// });
const dbconnect = async() => {
   try{
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
        console.log(chalk.bgCyan("Database Connected Successfully"));
   }catch(err){
        console.log(err, chalk.bgRed("Error while connecting to database"));
   }
}

export default dbconnect;

