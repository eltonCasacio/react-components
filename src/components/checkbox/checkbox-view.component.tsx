import React from "react";
import * as S from "./checkbox.styled";

type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CheckboxView: React.FC<CheckboxProps> = (params) => {

  return (
    <S.Wrapper>
      <S.Input id={params.labelFor} type="checkbox" onChange={params.onChange} checked={params.checked}/>
      {!!params.label && <S.Label htmlFor={params.labelFor}>{params.label}</S.Label>}
    </S.Wrapper>
  );
};

export default CheckboxView;
