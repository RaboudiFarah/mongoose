const mongoose = require ("mongoose");
const carschema = new mongoose.Schema ({
    name : string ,
    price :{ type : Number , required : true}
})
const Car = mongoose.model("Car", carschema) ;
module.exports = Car