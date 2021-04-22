import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import pages from './pages';
import routes from './configs/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.ROOT} exact>
          <pages.Login />
        </Route>
        <Route path={routes.DASHBOARD} exact>
          <pages.Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
