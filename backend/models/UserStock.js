const mongoose = require('mongoose')

const userStock = mongoose.Schema({
stock_name:{
        type:String,
        min:5,
        max:30
    },
stock_id:{
    type:String
},
    current_price:{
        type:Number
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
    transcation_type:{
        type:String,
        default:"buy"
    },
    transcation_date:{
        type:Date
    }
   
})


const UserStock = mongoose.model("userStock",userStock);
module.exports = UserStock;