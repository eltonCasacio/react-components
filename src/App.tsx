import React from "react";
import ToggleCheckbox from "./components/toggle-checkbox/toggle-checkbox";

function App() {
  return <ToggleCheckbox label="App" value={'valor?'} onCheck={(v) => console.log("???",v)} />;
}

export default App;
