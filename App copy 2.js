import  React  from 'react';
import { Text,  View, Image } from 'react-native';

 export default function mydog( ) {
  let pic={uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rawpixel.com%2Fsearch%2Fdog&psig=AOvVaw23IHGqFtoDZjxEDpz1kP6I&ust=1681762327208000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDl5IKbr_4CFQAAAAAdAAAAABAQ" };
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



