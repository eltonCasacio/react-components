import React from "react";
import * as S from "./checkbox.styled";

type CheckboxProps = {
  label: string;
};

const CheckboxView: React.FC<CheckboxProps> = (params) => {
  return (
    <S.Wrapper>
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox">{params.label}</label>
    </S.Wrapper>
  );
};

export default CheckboxView;
