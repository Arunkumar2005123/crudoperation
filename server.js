// const express=require('express');
// const cors=require('cors');
// const mongoosh=require('mongoosh');
// const app=express()
// app.use(cors());
// app.use(express.urlencoded({extended:true}));
// const mongodb="mongodb+srv://velarun390:Arun@2005@cluster0.3v4jrby.mongodb.net/?appName=Cluster0";
// mongoosh.connect(mongodb)
// .then(()=>{
//     console.log("Databased connected Successfully")
// })
// .catch(()=>{
//     console.log("Database is not connected Sucessfully)");
// });

// const dbschema=new mongoosh.Schema({Username:String,Usernumber:Number});
// const dbmodel=mongoosh.model("student",dbschema)
// app.post('/login',(req,res)=>{
//     const Uname=req.body.name;
//     const Unumber=req.body.number;
// const newdata= new dbmodel({Username:Uname,Usernumber:Unumber})
// newdata.save()
// .then(()=>{
//      res.send("Form Submitted Sucessfully")
// })
// .catch(()=>{
//     res.send("Form not submitted Successfully");
// })
// });

// app.listen(3000,()=>{
//     console.log("server is running on")
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Encode @ in password as %40
const mongodb = "mongodb://localhost:27017/avengers";


// Connect to MongoDB
mongoose.connect(mongodb)
.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log("Database connection failed:", err);
});

// Schema and Model
const dbschema = new mongoose.Schema({
    Username: String,
    Useremail:String,
    Userphone: String
    
});

const dbmodel = mongoose.model("student", dbschema);

// POST API
app.post('/login', (req, res) => {
    const Uname = req.body.name;
    const Uemail = req.body.email;
    const Unumber=req.body.phone;

    const newdata = new dbmodel({
        Username: Uname,
        Useremail: Uemail,
        Userphone: Unumber
    });

    newdata.save()
    .then(() => {
        res.send("Form Submitted Successfully");
        
    })
    .catch((err) => {
        res.send("Form not submitted:", err);
      
    });
});

// Start Server
const port=3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
