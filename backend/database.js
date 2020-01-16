const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/javascriptdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log("db conectada"))
.catch(err=>console.log(err));