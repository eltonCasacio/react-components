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

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onCheck,
  value,
  ...props
}) => {
  const [checked, setChecked] = React.useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  };
  return <CheckboxView {...props} onChange={onChange} value={value} />;
};

export default Checkbox;
