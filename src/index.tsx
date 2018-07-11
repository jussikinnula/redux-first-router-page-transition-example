// import * as React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import createHistory from 'history/createBrowserHistory';
// import App from './App';

// const element = document.createElement('div');
// document.body.appendChild(element);
// const history = createHistory();

// render(
//   <Router history={history}>
//     <Route path="/" component={App} />
//   </Router>,
//   element,
//   null
// );




import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import App from './components/App'
import configureStore from './configureStore'

const element = document.createElement('div');
document.body.appendChild(element);
const history = createHistory();
const { store } = configureStore(history);

const render = (App: any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    element
  )
}

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App/index', () => {
    const App = require('./components/App/index').default
    render(App)
  })
}
