import React from "react";
import { Label, Input, Icon } from "./toggle-checkbox.styled";

type ToggleCheckboxViewProps = {
  label?: string;
  name?: string;
  id?: string;
  value?: string | number | readonly string[] | undefined;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
const ToggleCheckboxView: React.FC<ToggleCheckboxViewProps> = ({
  label,
  name,
  id,
  value,
  isChecked = false,
  onCheck,
  ...props
}) => {
  const [checked, setChecked] = React.useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };

  return (
    <Label>
      <Input
        type={"checkbox"}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      <Icon />
      {label}
    </Label>
  );
};

export default ToggleCheckboxView;
