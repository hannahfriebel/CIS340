import React, {Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class TouchableApp extends Component {
 onPressButton(){
  alert('You tapped a button')
 }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
<Button

onPress={this._onPressButton
  
}
title="Press Button 1"
/>
      </View>

      <View style={styles.containerLayoutButton}>
      <Button

onPress={
 this._onPressButton
}
title="Press Button 2"
/>
<Button

onPress={
 this._onPressButton
}
title="Great"
color='green'
/>


      </View>

<View style={styles.containerButton}>
<Button

onPress={
  ()=>{
  alert('You tapped a button click me');
}}
title="tap"

/>


</View>


    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
  },
containerButton:{
  margin:25,

},
containerLayoutButton:{
margin:25,
flexDirection:'row',
justifyContent:'space-between'
}

});
