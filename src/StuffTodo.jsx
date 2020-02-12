import React, { useEffect, useState } from "react";

const StuffTodo = ({ backend }) => {
  const [records, setRecords] = useState([]);

  const loadData = () => {
    fetch(`${backend}pending`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRecords(data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {records.map(record => (
        <div key={record.id}>
          <b>{record.name}:</b>
          <p>{record.message}</p>
        </div>
      ))}
      <hr />
      <button onClick={loadData}>reload</button>
    </div>
  );
};

export default StuffTodo;
