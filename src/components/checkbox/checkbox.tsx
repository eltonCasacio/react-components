import React from "react";
import CheckboxView from "./checkbox-view";

type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: string;
  backgroundColor?: string;
  checkedColor?: string;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({ onCheck, checked, ...props }) => {
  return <CheckboxView onCheck={onCheck} checked={checked} {...props} />;
};

export default Checkbox;
