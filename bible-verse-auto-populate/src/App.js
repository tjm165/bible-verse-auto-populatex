import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import MyEditor from "./MyEditor";

async function scrape() {
  await axios.get(
    "https://medium.com/@masnun/handling-timeout-in-axios-479269d83c68"
  );
}

function App() {
  const [number, setNumber] = useState(0);

  useEffect(scrape());

  return (
    <div className="App">
      <body className="App-body">Your number is </body>

      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      {/* <MyEditor /> */}
    </div>
  );
}

export default App;
