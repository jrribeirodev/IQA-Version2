import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import MainTab from './src/navigators/MainTab';

function App(){
  return(
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}
export default App;