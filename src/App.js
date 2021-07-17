import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Basic from './pages/Basic';
import OtherInputs from './pages/OtherInputs';

function App() {
  return (
    <Router>
      <Header>
        <Nav>
          <span>
            <Link to="/basic">Basic</Link>
          </span>
          <span>
            <Link to="/otherinputs">Other Inputs</Link>
          </span>
        </Nav>
      </Header>

      <Main>
        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/otherinputs">
            <OtherInputs />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid gainsboro;
`;

const Main = styled.main`
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

export default App;
