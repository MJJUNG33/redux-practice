import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increase = () => {
    dispatch({ type: "increment", payload: { num: 5 } });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div className="App">
      <p>count: {count} </p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrement}>decrement</button>
      <Box />
    </div>
  );
}

export default App;
