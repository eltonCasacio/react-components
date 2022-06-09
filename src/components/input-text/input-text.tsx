import React from "react";
import InputTextView from "./input-text-view";

type InputTextProps = {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  value?: string;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  onInput?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<InputTextProps> = ({
  label,
  labelFor,
  initialValue,
  icon,
  iconPosition,
  disabled,
  hasError,
  errorMessage,
  onInput,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <InputTextView
      icon={icon}
      iconPosition={iconPosition}
      label={label}
      value={value}
      disabled={disabled}
      onChange={onChange}
      hasError={hasError}
      errorMessage={errorMessage}
      {...props}
    />
  );
};

export default Checkbox;
