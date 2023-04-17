import  React  from 'react';
import { Text, TextInput, View } from 'react-native';

 function Student(props ) {
  return (
    <View >
      <Text> Hey My name is {props.name} I am student in CIS 340</Text>
      
    </View>
  );
}

export default function MultiComp(){
  return (
<View style={{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
}}>
  <Text>
    Welcome to CIS 340
  </Text>
  <Student name="Hannah Friebel"/>
   <Student name = "Paris Hilton"/>
    <Student name ="Eric Cartman"/>
     <Student name ="Nba Youngboy"/>

</View>
  );
}


