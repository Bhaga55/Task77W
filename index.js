const mentorRouter = require('./Routers/MentorRouter')
const studentRouter = require('./Routers/StudentRouter')

const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());  

app.use(express.json());  

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

const mongoose = require('mongoose');

mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
const connection = mongoose.connection;
connection.on('open',() => console.log("MongoDB Connected"));





app.get("/",(req, res, next) =>{

    return res.status(200).json({
        message:"Server started successfully",
    });
});

app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))