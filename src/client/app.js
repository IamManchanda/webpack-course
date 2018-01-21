import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Counter from './counter';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app-root'),
  );
}

render(Counter);

if (module.hot) {
  module.hot.accept('./counter.js', () => {
    /* eslint-disable global-require */
    const NewCounter = require('./counter.js').default;
    /* eslint-enable */
    render(NewCounter);
  });
}
