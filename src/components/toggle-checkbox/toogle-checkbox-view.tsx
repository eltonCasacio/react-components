import React from "react";
import { Label, Input, Icon } from "./toggle-checkbox.styled";

type ToggleCheckboxViewProps = {
  label?: string;
  name?: string;
  id?: string;
  value?: string | number | readonly string[] | undefined;
};
const ToggleCheckboxView: React.FC<ToggleCheckboxViewProps> = ({
  label,
  name,
  id,
  value,
}) => {
  return (
    <Label>
      <Input type={"checkbox"} name={name} id={id} value={value} />
      <Icon />
      {label}
    </Label>
  );
};

export default ToggleCheckboxView;
