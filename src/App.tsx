import React from "react";
import InputText from "./components/input-text/input-text";
import { FaShippingFast } from "react-icons/fa";

function App() {
  return (
    <InputText
      label="Label"
      placeholder="input text"
      icon={<FaShippingFast />}
      iconPosition="right"
      hasError
      errorMessage="Campo obrigatório"
    />
  );
}

export default App;
