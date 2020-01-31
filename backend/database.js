const mongoose=require('mongoose');


mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log("db conectada"))
.catch(err=>console.log(err));