import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Table from "./components/table";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [newData, setNewData] = useState([]);
  const deleteItem = (id) => {
    const res = newData.filter((item) => {
      return item.id !== id;
    });

    setNewData(res);
  };

  return (
    <div className="App">
      <div className="Container">
        <h1>login</h1>
        <Form
          data={data}
          setData={setData}
          newData={newData}
          setNewData={setNewData}
        />

        <table>
          <tr>
            <th>Name</th>
            <th>Gmail</th>
            <th>Password</th>
            <th>Update</th>
          </tr>
          {newData?.map((ele, ind) => {
            return <Table deleteItem={deleteItem} ele={ele} key={ind} />;
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
