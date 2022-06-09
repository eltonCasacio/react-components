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
  label?: string;
  labelFor?: string;
  value?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputTextView: React.FC<InputTextProps> = ({
  label,
  labelFor,
  value,
  icon,
  iconPosition = "left",
  disabled = false,
  hasError = false,
  errorMessage = "Invalid value",
  onChange,
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
        {!!icon && <IconStyled>{icon}</IconStyled>}
        <InputStyled
          type={"text"}
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
