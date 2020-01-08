import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './config/routes'
import store from './store'
import { GlobalStyle } from './globalStyles';
import Layout from './components/Layout';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              {routes.map(route => (
                <Route exact={route.exact} path={route.path} component={route.component} />
              ))}
            </Suspense>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
