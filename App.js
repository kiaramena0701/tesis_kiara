import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Config from './src/Config';

import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';


const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const Example = () => (
  <Router
    showNavigationBar={false}
    hideNavBar={false}
    gestureEnable={false}
    >

      <Scene
        key="Login"
        title="Login"
        navBar={Login}
        component={Login}
        hideNavBar={false}
        back
      />

       <Scene
        key="Config"
        title="Config"
        navBar={Config}
        component={Config}
        hideNavBar={false}
        back
      />
    
  </Router>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export default Example;