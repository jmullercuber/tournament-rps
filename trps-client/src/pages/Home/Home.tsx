import logo from "./logo.svg";
import "./Home.css";

import styled from "styled-components";

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

const Home = () => (
  <StyledContainer>
    <StyledHeader>
      <img src={logo} className="Home-logo" alt="logo" />
      <p>
        Edit <code>src/pages/Home/Home.tsx</code> and save to reload.
      </p>
      <StyledLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </StyledLink>
    </StyledHeader>
  </StyledContainer>
);

export default Home;
