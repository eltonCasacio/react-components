import React from "react";
import * as S from "./checkbox.styled";

type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: string;
  backgroundColor?: string;
  onCheck?: (status: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxView: React.FC<CheckboxProps> = ({
  label,
  labelFor,
  labelColor,
  backgroundColor,
  onCheck,
  ...props
}) => {
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        backgroundColor={backgroundColor}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default CheckboxView;
