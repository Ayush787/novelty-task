const mongoose = require('mongoose');

const stockModel = mongoose.Schema({
    stock_name:{
        type:String,
        min:5,
        max:30,
        required:true

    },
    short_name:{
        type:String,
    },
    unit_price:{
        type:Number,
        required:true
    },
    units_available:{
        type:Number,
        required:true
    }
    
},{timestamps:true});

const Stock = mongoose.model("Stock",stockModel);

module.exports = Stock;