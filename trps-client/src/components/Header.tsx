import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../img/logo.svg";

const StyledNav = styled.nav`
  background-color: #202020;
`;

const StyledIconContainer = styled.div`
  height: 30px;
  width: 30px;
  :hover {
    background-color: #020202;
  }
`;

const StyledLogo = styled.img`
  height: 30px;
  width: 30px;
`;

export const Header = () => (
  <StyledNav>
    <NavLink exact to="/">
      <StyledIconContainer>
        <StyledLogo src={logo} />
      </StyledIconContainer>
    </NavLink>
  </StyledNav>
);
