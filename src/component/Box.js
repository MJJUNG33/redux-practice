import React from "react";
import { useSelector } from "react-redux";
import GrandSunBox from "./GrandSunBox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      This is Box {count}
      <GrandSunBox />
    </div>
  );
};

export default Box;
