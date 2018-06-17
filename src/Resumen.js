/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';
import Login from './Login'
import { IMG_HOME, IMG_TREE } from './images_b64'

export default class Resumen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       page: "HomeScreen",
    };
  }
  componentWillMount(){
    // console.warn('componentWillMount');
  }

  componentDidMount(){
    // console.warn('componentDidMount');
  }

  componentDidUpdate(){
    // AQUI EJECUTAR LAS FUNCIONES DE REFRESCAR VISTA CUANDO REGRESAS DE OTRA VISTA POR MEDIO DEL TAB-BAR
    // console.warn('componentDidUpdate');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{ height:96,width:96}} source={{uri:IMG_TREE}}/>
        <Text style={styles.titulo}>Ultima siembra:</Text><Text style={styles.instructions}>Platano</Text>
        <Text style={styles.titulo}>Fecha inicio</Text><Text style={styles.instructions}>05/05/2018</Text>
        <Text style={styles.titulo}>Promedio de cosecha estimada</Text><Text style={styles.instructions}>45 Quintales</Text>
        <Text style={styles.titulo}>Metros cuadrados de siembra</Text><Text style={styles.instructions}>250</Text>
        <Text style={styles.titulo}>Ultimo producto aplicado</Text><Text style={styles.instructions}>N/A</Text>
        <Text style={styles.titulo}>Estado</Text><Text style={styles.instructions}>ACTIVO</Text>
      </View>
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
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
