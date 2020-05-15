import React, { useState, useEffect } from "react";
// Since I did not have how to start
// in order to make a user
// list and bid amounts I thought I could examine to-do app
// examples so that I can copy and paste some part
// them and try to elobrate the app further from there. I tried to
// use hooks and I just used useState. Maybe I needed to use asloanother
// one too. For redux
// I tried to learn redux as well but I could not
// figure out how can I implement it yet. So, my intention
// was to create an app just using plain react and implementing
// redux after it. In a nutshell, I have a chunk of code that
// that doesn't work made up from me  :(((

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
