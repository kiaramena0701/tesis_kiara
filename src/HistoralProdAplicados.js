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
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import Login from './Login'
import { IMG_HOME, IMG_TREE, IMG_RIGHT} from './images_b64'

export default class HistoralProdAplicados extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       itemList:[ { 'nombre':'ALGO','indice':'A'} ,{'nombre':'ALGO','indice':'B'} , {'nombre':'ALGO','indice':'C'}],
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
	        <View style={styles.Jugadas}>
	        <View>
	          <FlatList
	              showsVerticalScrollIndicator={false}
	              style={{flex:1}}
	              data={ this.state.itemList }
	              renderItem={(item,index) => (
	                <TouchableOpacity
	                onPress={ () =>{ Actions.ListFactorQuimico() /*Actions.HistOneSiembra()*/} }
	                style = {styles.item_jugada}
	                
	                >
                  <View style={styles.item}>

                      <View style={{flexDirection:'column',justifyContent:'center',flex:1}}>
                        <Text style={styles.text}>#</Text>
          							<Text style={styles.text}>Quimico Aplciado: Rayito</Text>

                      </View>
        						<View style={{flexDirection:'column',justifyContent:'center',flex:0.17}}>
        							<Image style={{ height:40,width:40,opacity: 0.50}} source={{uri:IMG_RIGHT}}/>
        						</View>
                  </View>
	                </TouchableOpacity>)
	                }
	            keyExtractor={(item, index) => item.indice}
	          />
	        </View>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
      padding: 8,
      // width: 332,
      marginTop: 75,
      // backgroundColor: '#d9f9b1',
      alignItems: 'flex-start',
  },
  container2: {
      marginTop: 75,
      backgroundColor: '#d9f9b1',
      alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight:'700'
  },
  text3: {
    fontSize: 12,
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