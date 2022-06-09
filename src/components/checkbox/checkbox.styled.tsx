import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`;

type InputProps = { backgroundColor?: string };
export const Input = styled.input<InputProps>`
  ${({backgroundColor='#00f'}) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    position: relative;
    outline: none;

    &::before {
      content: "";
      width: 2px;
      height: 6px;
      border: 3px solid #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 1px;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:focus {
      box-shadow: 0 0 0.5rem #fff;
    }

    &:checked {
      background: ${backgroundColor};

      &::before {
        opacity: 1;
      }
    }
  `}
`;

type LabelProps = { labelColor?: string };
export const Label = styled.label<LabelProps>`
  ${({ labelColor }) => css`
    cursor: pointer;
    padding-left: 5px;
    color: ${labelColor};
    line-height: 1;
  `}
`;
