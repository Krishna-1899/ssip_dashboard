const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server started');
});

app.get=('/getRecord', async(req, res) => {
    try{
        //fetch all todo item from database
        const todos = await Db.myDatabase.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire toda data is fetched"
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            messsage:"server Error"
        })
    }
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connection Successful");
  // Rest of the code
})
.catch((err) => {
  console.error("Error connecting to the database:", err.message);
});