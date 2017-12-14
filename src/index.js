import React from 'react';
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import './styles/main.scss';
import App from './containers/app';

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  }

render(App);

if (module.hot) {
    module.hot.accept('./containers/app', () => { render(App) });
}