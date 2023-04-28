import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>jUST yellow text!</Text>
      <Text style={styles.largGreen}> This is Big green </Text>
   <Text style={[styles.yellow,styles.largGreen]}> Yellow text, then Big Green text</Text>
   <Text style={[styles.largGreen,styles.yellow]}> Yellow text, then Big Green text</Text>

    </View>
  );
}

const styles =StyleSheet.create({

container:{
  marginTop:60,

},

largGreen:{
  color:'green',
  fontWeight :'bold',
  fontSize:20,
},
yellow:{
  color:"yellow",
  fontSize:20,

},



}


);