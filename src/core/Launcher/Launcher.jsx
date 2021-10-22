import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../../store';

const Launcher = ({ children }) => (
  <React.StrictMode>
    <Provider store={store}>
      {children}
    </Provider>
  </React.StrictMode>
);

Launcher.propTypes = { children: PropTypes.element.isRequired };

export default Launcher;
