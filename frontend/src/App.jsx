import React from "react";
import AllLogs from "./Components/AllLogs";
import AllStocks from "./Components/AllStocks";
import MyPortfolio from "./Components/MyPortfolio";

const App = () => {
  return (
    <div className="App">
      <AllStocks />
      <MyPortfolio />
      <AllLogs />
    </div>
  );
};

export default App;
