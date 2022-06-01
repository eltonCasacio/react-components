import React from "react";
import CheckboxView from "./checkbox-view.component";

type CheckboxProps = {
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = (params) => {
  return <CheckboxView label={params.label} />;
};

export default Checkbox;