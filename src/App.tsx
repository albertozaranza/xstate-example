import React from 'react';
import {StatusBar} from 'react-native';

import MainRoutes from './routes/main';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <MainRoutes />
    </>
  );
}
