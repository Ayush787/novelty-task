const Stock = require('../models/stockModel');
const UserStock = require('../models/UserStock');
const Stocklog = require('../models/stocklog');

// step 1 view poertfolio
const myPortfoilo = async (req,res) =>{
    const myStocks = await UserStock.find();
    if(myStocks) return res.status(200).json(myStocks);

}


// step 2
// after buying stock --add that to potrfolio
const addStockToPortfolio = async(req,res) =>{
    const {stockid,stock_unit} = req.body;
    const stock_details = await Stock.findById(stockid);
    console.log(stock_details)
    if(!stock_details) return res.status(401).json({"message":"Stock Not found"});
    console.log(stock_details);
   stock_details.units_available = stock_details?.units_available - stock_unit;
    await stock_details.save();
    

    // const isExist = await UserStock.findOne({stock_name:})

    const result = await UserStock.create({
        stock_name:stock_details.stock_name,
        stock_id:stock_details._id,
        current_price:stock_details.unit_price,
        buy_Price:stock_details.unit_price,
        units_bought:stock_unit,
        transcation_type:"buy",
       transcation_date:Date.now(),

    });
    const newLog = await Stocklog.create({
        stock_name:stock_details.stock_name,
        stock_id:stock_details._id,
        current_price:stock_details.unit_price,
        buy_price:stock_details.unit_price,
        units_bought:stock_unit,
        transcation_type:"buy",
       transcation_date:Date.now(),
    })

    res.status(200).json({
        success:true,
        result
    })
}

//Sell out stock

const sellStock = async (req, res)=>{
    const {stockId,stock_unit} = req.body;
    const stock_details = await Stock.findById(stockId);
    if(!stock_details) return res.status(401).json({"message":"Stock Not found"});
    stock_details.units_available = stock_details?.units_available + stock_unit;


    const mystock = await UserStock.findOne({stock_id:stockId});
    if(!mystock) return res.status(401).json({"message":"Stock Not found"});

    mystock.selling_price = stock_details.unit_price;
    mystock.units_sold = stock_unit;
    mystock.transcation_type = "sell";

    const result = await mystock.save();
       const newLog = await Stocklog.create({
        stock_name:stock_details.stock_name,
        stock_id:stock_details._id,
        units_sold:stock_unit,
        selling_price: stock_details.unit_price,
        transcation_type:"sell",
       transcation_date:Date.now(),
    });


    if(result) return res.status(200).json(result);

    

    res.status(400).json({
        message:"Failed to sell this stock"
    })
}

const allLogs = async (req,res) =>{
    const logs = await Stocklog.find();
    // let totalProfit = 0;
    // let totalLoss = 0;
    // for(let log in logs){
    //     if(log.transcation_type == 'buy'){

    //     }
    // }

    res.status(200).json(logs);

    //profit loss
}



module.exports = {myPortfoilo,addStockToPortfolio,sellStock,allLogs};