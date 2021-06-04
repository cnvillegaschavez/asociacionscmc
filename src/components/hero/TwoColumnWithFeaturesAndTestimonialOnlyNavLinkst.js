import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
const Header = tw(HeaderBase)`max-w-none`;

export default ({
  buttonRounded = true,
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/#services">Mediación Online</NavLink>
      <NavLink href="/#we-team">Arbitraje Virtual</NavLink>
      <NavLink href="/#testimonials">Abogado Virtual</NavLink>
      <NavLink href="/#location">Conciliación</NavLink>
      <NavLink href="/#contact-us">Curso de Conciliación Extrajudicial</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink css={buttonRoundedCss} href="/#contact-us">
        MESA DE PARTES VIRTUAL
      </PrimaryLink>
    </NavLinks>
  ];
  return (
    <>
      
      <Header links={navLinks} />
    </>
  );
};
