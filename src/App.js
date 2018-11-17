import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizStep from './pages/QuizStep';

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
            <Route
              exact
              path="/quiz/:step"
              component={QuizStep}
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
    flex: 1,
  },
};
export default App;
