import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/quiz"
              component={Quiz}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
  },
};
export default App;
