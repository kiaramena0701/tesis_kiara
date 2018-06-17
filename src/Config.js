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
  Dimensions,
  FlatList,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import Login from './Login'
import { IMG_HOME, IMG_TREE, IMG_RIGHT} from './images_b64'

export default class Config extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
		    switch2Value:false
    };
  }

  toggleSwitch1(value){
      this.setState({switch2Value: value})
      if(value){
        Alert.alert("Prueba de Alerta","comprobar")
      }
      // console.warn('Switch 1 is: ' + value)
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
        <View  style={styles.container2}>
          	<Text style={{padding:8}}>Activar Notificaciones</Text>
            <Switch
              onValueChange = { (value) => { this.toggleSwitch1(value) }}
              value = {this.state.switch2Value}/>
        </View>

        <View  style={{flexDirection:'column',alignItems: 'stretch'}}>
          <TouchableHighlight>
            <Text style={styles.instructions}> + (Añadir Productos Quimicos)</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.instructions}> + (Añadir Factor Siembra)</Text>
          </TouchableHighlight>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
      flexDirection: 'column',
      padding: 8,
      // width: 332,
      marginTop: 75,
      // backgroundColor: '#d9f9b1',
      alignItems: 'center',
  },

  container2: {
    padding: 8,
    flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight:'700'
  },
  text2: {
      fontSize: 14,
      fontWeight:'700'
   },
  item_jugada: {
  	flexDirection: 'row', 
    paddingRight:4,
    paddingLeft:4,
    // paddingTop: 10,
    paddingBottom: 10,
    marginTop: 3,
    alignItems: 'flex-start',
    // borderBottomWidth: 1
  },
  item:{
  	flexDirection:'row',
  	alignItems:'stretch',
  	backgroundColor: '#f1f8e9',
  	paddingLeft:16,
  	paddingTop:8,
  	paddingBottom:8,
  	borderWidth: 1,
  	borderColor: '#c5e1a5',
  	borderRadius:8
  },
  Jugadas: {
     
    // flex:2,
    // justifyContent: 'center',
    // alignItems: 'stretch',
    // flexDirection:  'row',
   }
})