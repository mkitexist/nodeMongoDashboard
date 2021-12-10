const express = require("express");
// const check = require("express-validator");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// require("dotenv").config();
const bookingRoute=require("./routes/bookingRoutes");
app.use(cors());
app.use(express.json());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));

mongoose.connect("mongodb+srv://chethan:3DKSogfMhxLrQYEn@cluster0.yc8xs.mongodb.net/dashboard?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        // useCreateIndex:true,
        // useFindAndModify:false,
        useUnifiedTopology: true,
      }).then(()=>{
        console.log("connected to databse");
    }).catch(()=>{
        console.log("eroor occured while connected");
    });
    // app.use((req,res,next)=>{
    //     res.send("<h1>hii man</h1>");
    // })
  
app.use("/api/booking",bookingRoute);
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log("im running in port 3005");
});