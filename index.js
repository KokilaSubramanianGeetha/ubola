orconst express = require('express');
const app = express();

//dotenv
require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cashflw247:VijayanTech123456@taxiubolacluster.3mcdlml.mongodb.net/ubola');

mongoose.connection.once('open',()=>{
    console.log('mongoose connected');
});

mongoose.connection.on('error',(error)=>{
    console.log('Mongoose connection failed '+error);
});

//user route
const userRoute = require('./route/UserRoute');
app.use('/api',userRoute);

//notification route
// const notifyRoute = require('./route/NotificationRoute');
// app.use('/api',notifyRoute);

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});
