import React,{useState}  from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';

export default function App() {

const[count,setCount]=useState(0);


const onTap=()=> setCount(count=>count+1);

  return (
    <View style={styles.container}>
    <Image source={{uri:'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617-768x768.jpg'}}
    style={styles.logo}
    />
<Text style={styles.instru}>
press the button below to select an image on your phone
</Text>
 
     <TouchableOpacity
style={styles.button}
onPress={()=>alert('You havent selected an image yet')}>
<Text style={styles.buttonText}> pick image
</Text>

     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
   justifyContent:'center',
  },
  button:{
alignItems:"center",
backgroundColor:"#F0FFFF",
padding:20,
borderRadius:5,

  },
  instru:{
fontSize:18,
color:"#87CEFA",
marginHorizontal:15,
marginBottom:10,

  },

  logo:{
width:305,
height:300,
marginBottom:20,
  },
  buttonText:{
    fontSize:20,
    color:"FFF"
  }
});
