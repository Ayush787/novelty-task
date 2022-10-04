import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllStocks.css";

const AllStocks = () => {
  const [allStocks, setAllStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
  const [units, setUnits] = useState(0);
  const [loadNewData, setLoadNewData] = useState(false);

  const buyStocks = async () => {
    const result = await axios.post("http://localhost:3000/api/v1/buy-stock", {
      stockid: selectedStock._id,
      stock_unit: units,
    });
    if (result) {
      setLoadNewData(true);
      alert("Stock Bought", selectedStock.stock_name);
    }
  };
  const getStocks = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/getAllStocks"
    );
    setAllStocks(response.data.allStocks);
    console.log("AllStocks", response.data.allStocks);
  };
  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedStock(
      allStocks.filter((stock) => stock.stock_name == event.target.value)[0]
    );
    console.log(selectedStock);
  };

  useEffect(() => {
    getStocks();
  }, [loadNewData]);

  return (
    <div className="all-stocks">
      <h3>All Stocks Details</h3>
      <div className="select-stock">
        <label htmlFor="stock">Select A Stock: </label>
        <select
          name="stock"
          id="stock"
          onChange={(event) => handleSelectChange(event)}
        >
          {allStocks?.map((stock, index) => (
            <option key={index} value={stock.stock_name}>
              {console.log("SelectedStock", selectedStock)}
              {stock.stock_name}
            </option>
          ))}
        </select>
      </div>
      <div className="stockInfo">
        <h3>Stock Details</h3>
        <h4>Stock Name:{selectedStock.stock_name}</h4>
        <h5>Unit Price:{selectedStock.unit_price}</h5>
        <h5>Available Units:{selectedStock.units_available}</h5>
      </div>
      <input
        type="number"
        placeholder="Enter Units To buy"
        onChange={(e) => setUnits(e.target.value)}
      ></input>
      <button onClick={(e) => buyStocks()}>Buy</button>
    </div>
  );
};

export default AllStocks;
