import React from "react";
import * as S from "./checkbox.styled";

type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: string;
  backgroundColor?: string;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxView: React.FC<CheckboxProps> = ({
  label,
  labelFor,
  labelColor,
  backgroundColor,
  isChecked = false,
  value,
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
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked}
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
