import { React } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const csulogo = {
  uri:'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617-768x768.jpg',
 
};


  return (
    <View style={styles.container}>
 

     <Image
     style={styles.stretch}
source={csulogo}

     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
  },

  localCSUlogo:{
    width:55,
    height:65,
  },
  urlCSULogo:{
    width:50,
    height:50,

  },
  stretch:{
width:50,
height:100,
resizeMode:'contain',

  }
});
