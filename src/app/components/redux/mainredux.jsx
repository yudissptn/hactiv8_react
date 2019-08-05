import React, { useState } from "react";

import "../../../App.css";
import Command from "./command";
import Result from "./result";
import Fetching from "./fetching";
import List from "./list";

const Mainredux = () => {
  const [count, setCount] = useState(0);
  const [hook, setHook] = useState("ini hook");

  return (
    <div>
      <Result
      // results={count}
      />
      <Command
      // inc={() => setCount(count + 1)}
      // dec={() => setCount(count - 1)}
      />
      <Fetching />
      <List />
    </div>
  );
};
export default Mainredux;
