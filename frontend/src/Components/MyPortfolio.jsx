import React, { useState, useEffect } from "react";
import axios from "axios";

const MyPortfolio = () => {
  const [myStocks, setMyStocks] = useState([]);
  const [loadNewData, setLoadNewData] = useState(false);
  const getMyStocks = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/myPortfoilo"
    );

    setMyStocks(
      data.filter((mystocks) => mystocks.transcation_type !== "sell")
    );
    console.log("setstock", myStocks);
  };
  const sellStockHandler = async (id, units) => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/sell-stock",
      {
        stockId: id,
        stock_unit: units,
      }
    );
    if (response) {
      alert(`${units} is now sold`);
      setLoadNewData(true);
    }
  };
  useEffect(() => {
    getMyStocks();
  }, [loadNewData]);
  return (
    <div className="my-portfolio">
      <h3 className="mainHeading">My Stocks</h3>
      <table>
        <tr>
          <th>Stock Name</th>
          <th>Units</th>
          <th>Current price</th>
          <th>Action</th>
        </tr>
        {myStocks?.map((stock, index) => (
          <tr key={index}>
            <td>{stock.stock_name}</td>
            <td>{stock.units_bought}</td>
            <td>{stock.current_price}</td>
            <td>
              <button
                className="btn-sell"
                onClick={(e) =>
                  sellStockHandler(stock.stock_id, stock.units_bought)
                }
              >
                Sell
              </button>
            </td>
          </tr>
        ))}
      </table>
      {/* {myStocks?.map((stock, index) => (
        <div className="stock" key={index}>
          <div className="stock-details">
            <h3>{stock.stock_name}</h3>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default MyPortfolio;
