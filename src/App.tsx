import React from "react";
import Checkbox from "./components/checkbox/checkbox.component";
function App() {
  return <Checkbox  label="chk" labelFor="a" onCheck={() => console.log("teste")}/>;
}

export default App;
