import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import BottomNavigator from './navigation/BottomNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
