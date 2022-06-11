import React from "react";
import CheckboxView from "./checkbox-view";

type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: string;
  backgroundColor?: string;
  value?: string | ReadonlyArray<string> | number;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <CheckboxView {...props} />;
};

export default Checkbox;
