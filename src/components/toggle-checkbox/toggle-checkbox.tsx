import React from "react";
import ToggleCheckboxView from "./toogle-checkbox-view";

type CheckboxProps = {
  id?: string;
  label?: string;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <ToggleCheckboxView {...props} />;
};

export default Checkbox;
