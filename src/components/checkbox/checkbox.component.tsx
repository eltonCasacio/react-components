import React from "react";
import CheckboxView from "./checkbox-view.component";

type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
}& React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = (params) => {
  const [checked, setChecked] = React.useState(false);

  const onChange = () => {
    const status = !checked;
    setChecked(status);
    if (params.onCheck) {
      params.onCheck(status);
    }
  }
  return <CheckboxView onChange={onChange} checked={checked} {...params} />;
};

export default Checkbox;