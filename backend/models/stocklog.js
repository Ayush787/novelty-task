const mongoose = require('mongoose')

const stockLog = mongoose.Schema({
stock_name:{
        type:String,
        min:5,
        max:30
    },
stock_id:{
    type:String
},
    buy_Price:{
        type:Number
    },
    selling_price:{
        type:Number
    },
    units_bought:{
        type:Number
    },
    units_sold:{
        type:Number
    },
    transcation_date:{
        type:Date
    },
    transcation_type:{
        type:String,
        default:"buy"
    },
})


const Stocklog = mongoose.model("stocklog",stockLog);
module.exports = Stocklog;