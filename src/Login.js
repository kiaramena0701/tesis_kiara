/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      clave:'',
      hint_user:'nombre de usuario',
      hint_pass:'contraseña',
    }
  }

  postLogin(){
    Actions.TabBar();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginBoxG}>
          <View style={styles.loginBox}>
            <TextInput
              onFocus={ () =>{ } }
              keyboardType = 'numeric'
              underlineColorAndroid='rgba(100,95,0,0.0)' 
              style={styles.loginComponent} 
              placeholder={this.state.hint_user}
              onChangeText={(username) => { } } 
              value={this.state.username}
              />
              {/*onChangeText={(text) => { this.addLoginCampos(0,text) } } */}
            <TextInput 
              onFocus={ () => {} }
              keyboardType = 'numeric'
              underlineColorAndroid='rgba(0,0,0,0.0)'
              style={styles.ComponentPass}
              secureTextEntry={true}
              placeholder={this.state.hint_pass}
              onChangeText={(clave) => {  } }
              value={this.state.clave}
              returnKeyType="done"
              />
           </View>
            <TouchableHighlight 
              pointerEvents={this.state.btnDisable}
              onPress={() => { this.postLogin() } }
              style={styles.loginBtn}
              underlayColor="#01579B"
              >
              <View><Text style={styles.textBtn}>Iniciar</Text></View>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightgray',
    justifyContent: 'center',
    // alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16,
  },
  loginBox: {
    // backgroundColor: 'white',
    height:108,
    justifyContent: 'center',
    alignItems: 'stretch',
    // shadowOpacity: .1,
    flexDirection:  'column',
    borderTopLeftRadius:40,
    borderTopRightRadius:6

  },
   circles: {
    backgroundColor: '#000000ad',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },

  loginBoxG: {

    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection:  'column',
    marginLeft:16,
    marginRight:16,
    borderTopLeftRadius:40,
    borderTopRightRadius:6

  },
   logoBox: {
    // backgroundColor: 'red',
    height:180,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowOpacity: .1,
    flexDirection:  'column',
    marginLeft:16,
    marginRight:16,
    borderTopLeftRadius:40,
    borderTopRightRadius:6

  },
  logoBoxBattery: {
    backgroundColor: '#BDBDBD',
    // height:175,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowOpacity: .1,
    flexDirection:  'row',
    // marginLeft:16,
    paddingLeft: 16,
    paddingRight: 16,
    flex:0.16,
    // marginRight:16,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20

  },
  logoOrkapi: {
    // backgroundColor: 'white',
    height:55,
    justifyContent:'flex-end',
    alignItems: 'center',
    flexDirection:  'column',
    flex: 0.75,
    marginLeft:16,
    marginRight:16,
    marginTop: 110

  },
  loginComponent:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'stretch',
    textAlign:'center',
    borderWidth: 1,
    borderColor: '#ffff',
    borderStyle: 'solid',
    // borderTopLeftRadius:15,
    // borderTopRightRadius:40,
    // borderBottomLeftRadius:40,
    // borderBottomRightRadius:40
  },
  ComponentPass:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'stretch',
    textAlign:'center',
    borderWidth: 1,
    borderColor: '#ffff',
    borderStyle: 'solid',
  },
  loginBtn:{
    backgroundColor: '#673ab7',
    padding:14,
    // borderBottomRightRadius:15
  },
  textBtn:{
    color: '#FFF',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 24,
  }
});
