import styled, { css } from "styled-components";

export const WrapperStyled = styled.div``;

type InputTextProps = {
  iconPosition: "left" | "right";
  disabled: boolean;
  hasError: boolean;
};
export const InputWrapperStyled = styled.div<InputTextProps>`
  ${({ iconPosition, disabled, hasError }) => css`
    display: flex;
    flex-direction: ${iconPosition === "right" ? "row-reverse" : "row"};
    padding: 10px;
    border: 1px solid;
    border-radius: 3px;
    border-color: ${hasError ? "#ff3c3c" : "#94949489"};
    background-color: ${disabled ? "#94949428" : "#e9e9e922"};
   
    &:focus-within {
      box-shadow: 0 0 0 2px #c4c4c434;
    }

    ${hasError &&
    css`
      svg {
        color: #ff3c3c;
      }
    `}
  `}
`;

export const InputStyled = styled.input`
  ${() => css`
    color: #0f8;
    font-family: "Courier New", Courier, monospace;
    font-size: 14px;
    padding: 2px 5px;
    background-color: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const LabelStyled = styled.label<{ hasError: boolean }>`
  ${({ hasError }) => css`
    font-size: 14px;
    color: ${hasError ? "#ff3c3c" : "#000"};
    cursor: pointer;
  `}
`;

export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  color: gray;

  & svg {
    width: 100%;
  }
`;

export const MessageErrorStyled = styled.div`
  ${({ theme }) => css`
    color: #ff3c3c;
    font-size: 0.8rem;
    padding-left: 2px;
  `}
`;
