import React from 'react';
import { Provider } from 'react-redux';
import store from './src/RTK/store';
import { AppNav } from './src/routes/AppNav';

export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  
  );
}


