import styled, { css } from "styled-components";
import theme from "../../styles/theme";

type WrapperStyledProps = {
  isOpen?: boolean;
};

const WrapperStyledModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const WrapperStyled = styled.div<WrapperStyledProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;
    ${ContentStyled} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && WrapperStyledModifiers.open()}
      ${!isOpen && WrapperStyledModifiers.close()}
    }
  `}
`;

export const TitleStyled = styled.div`
  ${() => css`
    cursor: pointer;
    color: ${theme.colors.black};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
  `}
`;

export const ContentStyled = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.primary};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    &::before {
      content: "";
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.primary};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`;
