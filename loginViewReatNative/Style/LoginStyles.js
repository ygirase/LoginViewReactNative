
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");

const LoginStyles = StyleSheet.create({
  NavigationContainer: {
      flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#696969",
    paddingVertical: 10,
  },
  inputWrap: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  input: {
    flex: 1,
    color: '#FFF',
  },
  buttonPhoto: {
    flex: 1,
    backgroundColor: "#ff69b4",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: width / 2 -50,
    width: 100,
    height: 100,
  },
  imagePhoto: {
    backgroundColor: "#ff69b4",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export {LoginStyles};
