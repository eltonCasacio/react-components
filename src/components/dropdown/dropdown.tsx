import React, { useState } from "react";
import { WrapperStyled, TitleStyled, ContentStyled } from "./dropdown.styled";

type DropdownProps = {
  title: React.ReactNode;
  children?: React.ReactNode;
};
const Dropwdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <WrapperStyled isOpen={isOpen}>
      <TitleStyled onClick={() => setIsOpen(!isOpen)}>{title}</TitleStyled>
      <ContentStyled aria-hidden={!isOpen}>{children}</ContentStyled>
    </WrapperStyled>
  );
};

export default Dropwdown;
