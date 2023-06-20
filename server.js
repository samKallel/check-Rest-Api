const express= require ('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const connectDB = require('./Config/connectDB');
connectDB();
app.use('/api/contact', require('./Routes/contact'))


const PORT= process.env.PORT;
app.listen(PORT, (err)=>{
    err
    ? console.log(`Ther is an error:${err}`)
    : console.log(`The server is running on : http://localhost:${PORT}`);
    
})  