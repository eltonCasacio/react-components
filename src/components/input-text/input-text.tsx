import React from "react";
import InputTextView from "./input-text-view";

type InputTextProps = {
  inputType?: string;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  changePasswordVisible?: () => void;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  passwordVisible?: boolean;
  onTyping?: (value: string) => void;
};

const Checkbox: React.FC<InputTextProps> = ({
  inputType,
  label,
  labelFor,
  initialValue,
  placeholder,
  icon,
  iconPosition,
  changePasswordVisible,
  disabled,
  hasError,
  errorMessage,
  passwordVisible,
  onTyping,
}) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onTyping && onTyping(newValue);
  };

  return (
    <InputTextView
      inputType={inputType}
      label={label}
      labelFor={labelFor}
      value={value}
      placeholder={placeholder}
      icon={icon}
      iconPosition={iconPosition}
      changePasswordVisible={changePasswordVisible}
      disabled={disabled}
      hasError={hasError}
      errorMessage={errorMessage}
      passwordVisible={passwordVisible}
      onChange={onChange}
    />
  );
};

export default Checkbox;
