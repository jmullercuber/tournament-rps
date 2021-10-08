import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Room } from "./pages";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const HeaderContainter = styled.div`
  flex: 0 1 auto;
`;
const PageContainter = styled.div`
  flex: 1 1 auto;
`;
const FooterContainter = styled.div`
  flex: 0 1 auto;
`;

function App() {
  const page = (
    <Switch>
      {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
  return (
    <Router>
      <Box>
        <HeaderContainter>
          <Header />
        </HeaderContainter>
        <PageContainter>{page}</PageContainter>
        <FooterContainter>
          <Footer />
        </FooterContainter>
      </Box>
    </Router>
  );
}

export default App;
