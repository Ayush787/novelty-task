import React, { useState, useEffect } from "react";
import axios from "axios";

const AllLogs = () => {
  const [allLogs, setAllLogs] = useState([]);
  const getAllLogs = async () => {
    const { data } = await axios.get("http://localhost:3000/api/v1/log");
    console.log("All Logs data", data);
    setAllLogs(data);
  };

  useEffect(() => {
    getAllLogs();
  }, []);

  return (
    <div className="logs">
      <ol>
        {allLogs.map((log, index) => (
          <li key={index}>
            {`${log.transcation_type} ${
              log.units_bought || log.units_sold
            } of ${log.stock_name} at
            ${log.transcation_date}`}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AllLogs;
