import styled, { css } from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
  ${() => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid #ccc;
    border-radius: 0.2rem;
    transition: background border 0.2s;
    position: relative;
    outline: none;

    &::before {
      content: "";
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:focus {
      box-shadow: 0 0 0.5rem #fff;
    }

    &:checked {
      border-color: #04f01c;
      background: #f004d4;

      &::before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label`
    ${() => css`
        cursor: pointer;
        padding-left: 5px;
        color: #f77802;
        line-height: 1;
    `}
`;
