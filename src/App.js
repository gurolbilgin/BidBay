import React, { useState, useEffect } from "react";
function App() {
  const [list, setList] = useState([
    { text: "John Doe : 7100" },
    { text: "Darth Vader : 7000" },
    { text: "Chuky : 6950" },
  ]);

  const [bid, setBid] = useState([
    { numb: 6100 },
    { numb: 6000 },
    { numb: 5950 },
  ]);
  useEffect(() => {
    const listTotal = [...list, ...bid];
  }, [list, bid]);

  const [user, setUser] = useState("");
  const [figures, setFigures] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser("");
    addFigures(figures);
    setFigures("");
  };

  const addUser = (text, numb) => {
    const updatedList = [
      [...list, { text }],
      [...bid, { numb }],
    ];
    setList(updatedList);
  };

  const addFigures = (numb, bid) => {
    const updatedBids = [...bid, { numb }];
    setFigures(updatedBids);
  };

  return (
    <div className="App">
      <h1>BIDDER APP</h1>
      <h2>PRODUCT IMAGE</h2>
      <h4>Brand: Chevrolet</h4>
      {/* <h4>Current Price: {bid}</h4> */}
      <div className="row end-xs">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter your bid $"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </form>
        <hr></hr>
        <h2>TOP BIDDERS</h2>
        {list.map((user, index) => (
          <div key={index}>
            <span>{user.text}</span>
          </div>
        ))}
        {list.map(({ bid, index }) => (
          <div key={index}>
            <span>{bid.numb}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
