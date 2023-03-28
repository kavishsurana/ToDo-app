const express = require('express')
const mongoose = require('mongoose')

const app = express()

//  
mongoose.set("strictQuery", false)


mongoose.connect('mongodb://127.0.0.1:27017/Todoapi',{
    // useNewUrlParser: true,
    // useCreateIndex: true
})



//middlewares
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");


app.use(require("./routers/index"))
app.use(require("./routers/todo"))



app.listen(3000 , () => {
    console.log("Server is started on port 3000")
})