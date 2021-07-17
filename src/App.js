import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Basic from './pages/Basic';

function App() {
  return (
    <Router>
      <Header>
        <nav>
          <div>
            <Link to="/basic">Basic</Link>
          </div>
        </nav>
      </Header>

      <Main>
        <Switch>
          <Route path="/">
            <Basic />
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

export default App;
