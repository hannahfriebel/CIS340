import  React  from 'react';
import { Text,  View, Image } from 'react-native';

 export default function mydog( ) {
  let pic={uri:"https://m.media-amazon.com/images/I/610D6aQ-SYL.jpg" };
return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
   <Image source= {pic}
   style={{width:200,height:200}}
   />
   <Text>
    Hello this is my dog
     </Text>
  </View>
   ); 
}
