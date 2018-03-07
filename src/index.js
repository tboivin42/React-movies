import React from 'react';
import { render } from 'react-dom';
import App from './Containers/App';
import { Provider } from 'react-redux';
import generateStore from './store';

const initialState = {
  movies: {},
};

const store = generateStore(initialState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
render(
  <Root/>, 
  document.querySelector('.container')
);
