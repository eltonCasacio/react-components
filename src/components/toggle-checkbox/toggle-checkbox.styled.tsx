import styled, { css } from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: min-content;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:checked + i {
      background: #0099ff;
      flex-direction: row-reverse;
    }

    &:checked + i:before {
      -webkit-box-shadow: -3px 0 3px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 3px 0 -3px 0 rgba(0, 0, 0, 0.2);
    }

    &:checked + i:after {
      opacity: 1;
    }

    &:checked + i {
      &:before {
        background: #ffffff;
      }
    }
  `}
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 45px;
  padding: 3px 0;
  margin-right: 5px;
  border: 1px solid #6d6e6e60;
  border-radius: 15px;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    background: #0099ff;
    border-radius: 100%;
    -webkit-box-shadow: 3px 0 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 3px 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: "ON";
    font-size: 12px;
    color: rgba(255, 255, 255, 0.801);
    opacity: 0;
  }

  transition: all 0.2s ease-in-out;
`;
