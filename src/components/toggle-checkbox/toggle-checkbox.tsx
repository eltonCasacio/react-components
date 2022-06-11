import React from "react";
import ToggleCheckboxView from "./toogle-checkbox-view";

type CheckboxProps = {
  label?: string;
  name?: string;
  id?: string;
  value?: string | number | readonly string[] | undefined;
};

const Checkbox: React.FC<CheckboxProps> = ({ label = "Ativo", name, id }) => {
  return <ToggleCheckboxView label={label} name={name} id={id} />;
};

export default Checkbox;
