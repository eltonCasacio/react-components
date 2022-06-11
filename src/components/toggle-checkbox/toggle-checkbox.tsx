import React, { useCallback } from "react";
import ToggleCheckboxView from "./toogle-checkbox-view";

type CheckboxProps = {
  id?: string;
  label?: string;
  name?: string;
  value?: string | number | readonly string[] | undefined;
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ onCheck, isChecked, ...props }) => {
  const [checked, setChecked] = React.useState(isChecked);

  const onChange = useCallback(() => {
    const status = !checked;
    setChecked(status);
    !!onCheck && onCheck(status);
  }, [checked, onCheck]);

  return <ToggleCheckboxView {...props} onChange={onChange} />;
};

export default Checkbox;
