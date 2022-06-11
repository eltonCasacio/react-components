import React from "react";
import {
  WrapperStyled,
  LabelStyled,
  InputWrapperStyled,
  InputStyled,
  IconStyled,
  MessageErrorStyled,
} from "./input-text.styled";

export type InputTextProps = {
  inputType?: string;
  label?: string;
  labelFor?: string;
  value?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hasError?: boolean;
  errorMessage?: string;
  passwordVisible?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePasswordVisible?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputTextView: React.FC<InputTextProps> = ({
  inputType = "text",
  label,
  labelFor,
  value,
  icon,
  iconPosition = "left",
  disabled = false,
  hasError = false,
  errorMessage = "Invalid value",
  passwordVisible = false,
  onChange,
  changePasswordVisible,
  ...props
}) => {
  return (
    <WrapperStyled>
      {label && (
        <LabelStyled htmlFor={labelFor} hasError={hasError}>
          {label}
        </LabelStyled>
      )}
      <InputWrapperStyled
        iconPosition={iconPosition}
        disabled={disabled}
        hasError={hasError}
      >
        {!!icon && <IconStyled onClick={changePasswordVisible}>{icon}</IconStyled>}
        <InputStyled
          type={passwordVisible ? "text" : inputType}
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </InputWrapperStyled>
      {hasError && <MessageErrorStyled>{errorMessage}</MessageErrorStyled>}
    </WrapperStyled>
  );
};

export default InputTextView;
