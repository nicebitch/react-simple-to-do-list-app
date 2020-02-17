/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Header extends component{
  render(){
    return(
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
        </TouchableOpacity>
          <TextInput
            value={this.props.value}
            onChangeText={this.props.onChange}
            onSubmitEditing={this.props.onAddItem}
            placeholder='What needs to be done?'
            blurOnSubmit={false}
            returnKeyType='done'
            style={styles.input}
          />
      </View>
    );
  }
}
const styles=StyleSheet.create({
  header:{
    paddingHorizontal:16,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  toggleIcon:{
    fontSize:30,
    color:'#ccc'
  },
  input:{
    flex:1,
    marginLeft:16,
    height:50
  }
})
export default Header;
