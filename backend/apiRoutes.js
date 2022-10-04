const express  =require('express');
const router = express.Router();
const {getAllStocks, addNewStock} = require('./controllers/stockController');
const { myPortfoilo,addStockToPortfolio,sellStock,allLogs} = require('./controllers/userController');

 router.route('/getAllStocks').get(getAllStocks);
 router.route('/addStock').post( addNewStock);

//  user routes
router.route('/myPortfoilo').get( myPortfoilo);
router.route('/buy-stock').post(addStockToPortfolio);
router.route('/sell-stock').post(sellStock);
router.route('/log').get(allLogs);
module.exports = router;