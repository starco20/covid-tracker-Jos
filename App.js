import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Global from './src/components/Global';
import TList from './src/components/TList';
import List from './src/components/List';

class App extends Component {

  render() {
    return (
      <View>
        <Text style={{ textAlign:'center',fontWeight:'bold', fontSize:20 }}>
          {"\n"}Data COVID-19 Global & Indonesia
          {"\n \n"}Global
        </Text>
        <Global />
          <Text style={{ textAlign:'center' , fontSize:30 }}>{"\n \n \n"}Indonesia{"\n"}</Text>
        <List/>
        <TList/>
      </View>
    )
  }
}

export default App;