/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Platform,
  StatusBar,
  Alert
} from 'react-native';

import {Scene, Router, Actions } from 'react-native-router-flux';
import Login from './src/Login'
import Resumen from './src/Resumen'
import TabBar from './src/TabBar'
import HistoralSiembras from './src/HistoralSiembras'
import HistOneSiembra from './src/HistOneSiembra'
import ListFactorQuimico from './src/ListFactorQuimico'
import HistoralProdAplicados from './src/HistoralProdAplicados'


export default class App extends Component<{}> {

   constructor(props) {
    super(props);
    this.state = {
   
    }
  }
  componentWillMount(){
  }

  

  render() {
    return (
        <Router showNavigationBar={false} hideNavBar={true} 
          gestureEnabled={false}
          panHandlers={null}>

          <Scene 
            key="Login" 
            component={Login}
            title="Login"
            hideNavBar={true}/>

          <Scene 
            key="TabBar" 
            component={TabBar}
            title="Resumen"
            hideNavBar={true}/>

          <Scene 
            key="Resumen" 
            component={Resumen}
            title="Resumen"
            hideNavBar={true}/>

          <Scene 
            key="HistoralSiembras" 
            component={HistoralSiembras}
            title="HistoralSiembras"
            hideNavBar={false}/>

           <Scene 
            key="ListFactorQuimico" 
            component={ListFactorQuimico}
            title="ListFactorQuimico"
            hideNavBar={false}/>


            <Scene 
            key="HistoralProdAplicados" 
            component={HistoralProdAplicados}
            title="HistoralProdAplicados"
            hideNavBar={false}/>

           <Scene 
            key="HistOneSiembra" 
            component={HistOneSiembra}
            title="HistOneSiembra"
            hideNavBar={false}/>

       </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
