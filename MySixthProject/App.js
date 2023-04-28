import { React } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

const csulogo = {
  uri:'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617-768x768.jpg',
 
};


  return (
    <View style={styles.container}>
 <ImageBackground source={csulogo}
style={styles.Image}>

<Text style={styles.text}>
  Csu logo
</Text>
</ImageBackground>


 

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'colum',
  },

  Image:{
  flex:1,
  resizeMode:'cover',
  justifyContent:'center'
  },
  text:{
    color:'red',
    fontSize:50,
    fontWeight:'bold',

  },
  stretch:{
width:50,
height:100,
resizeMode:'contain',

  }
});
