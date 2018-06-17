import React , { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default class  Config extends Component {
  static onEnter = () => {
    Actions.refresh({
      title: 'Login!',
      rightTitle: 'rightTitle',
      onRight: () => {},
    });
  };

  render() {
    const title = this.props.title || 'No Title';
    const data = this.props.data || 'No Data';
    console.log("Login RENDER");
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableHighlight onPress={()=>{Actions.Login()}}>
          <Text>Login page 1</Text>
        </TouchableHighlight>
      </View>
    );
  }
}