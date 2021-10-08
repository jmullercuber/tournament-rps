import "./Home.css";

import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledHeader = styled.h1``;
const StyledMenuOptionsContainer = styled.div`
  display: flex;
`;
const StyledSelectOption = styled.div`
  display: inline;
  padding: 20px;
`;
const StyledButton = styled.a`
  display: block;
  background-color: green;
  border-radius: 6px;
  padding: 20px;
`;

const Home = () => {
  const joinOption = (
    <>
      <StyledButton href="#/room/123">Join</StyledButton>
      <input></input>
    </>
  );

  const createOption = <StyledButton>Create Room</StyledButton>;

  const options = [joinOption, createOption];

  return (
    <StyledContainer>
      <StyledHeader>Tournament RPS</StyledHeader>
      <StyledMenuOptionsContainer>
        {options.map((op) => (
          <StyledSelectOption>{op}</StyledSelectOption>
        ))}
      </StyledMenuOptionsContainer>
    </StyledContainer>
  );
};

export default Home;
