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

class Footer extends component{
  render(){
    const{filter}=this.props;
    return(
      <View style={styles.container}>
        <Text>{this.props.count} count</Text>
        <View style={styles.filters}>
          <TouchableOpacity stlye={[styles.filter,filter=="All"&&styles.selected]} onPress={()=>this.props.onFilter('All')}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity stlye={[styles.filter,filter=="Active"&&styles.selected]} onPress={()=>this.props.onFilter('Active')}>
          <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity stlye={[styles.filter,filter=="Complete"&&styles.selected]} onPress={()=>this.props.onFilter('Complete')}>
          <Text>completed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.props.onClearComplete}>
          <Text>Clear Complete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    padding:16,
    flexDirection:"row",
    alignItems:"certer",
    justifyContent:"space-between"
  },
  filters:{
    flexDirection:"row"
  },
  filter:{
    padding:8,
    borderRadius:5,
    borderWidth:1,
    borderColor:"transparent"
  },
  selected:{
    borderColor:'rgba(175,47,47,.2)'
  }
})
export default Footer;
