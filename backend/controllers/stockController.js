const Stock = require('../models/stockModel');

const addNewStock = async(req,res) =>{
    const {stock_name,short_name,unit_price,units_available} = req.body;
   const result =  await Stock.create({
        stock_name,unit_price,units_available,short_name
    });
    if(result) return res.status(200).json({
        messsage:"New Stock Added",
        result
    });
    res.status(400).json({
        messsage:"Something Failed"
    })
}

const getAllStocks = async (req,res) =>{
    const allStocks = await Stock.find();
    res.status(200).json({
        success:true,
        allStocks
    })
}

module.exports = {getAllStocks, addNewStock}