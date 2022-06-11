import React from "react";
import { Label, Input, Icon } from "./toggle-checkbox.styled";

type ToggleCheckboxViewProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const ToggleCheckboxView: React.FC<ToggleCheckboxViewProps> = ({ label, ...props }) => {
  return (
    <Label>
      <Input type={"checkbox"} {...props} />
      <Icon />
      {label}
    </Label>
  );
};

export default ToggleCheckboxView;
