import React from 'react';
import {Text, TextInput,View} from 'react-native';

 function HannahApp() {
  return (
    <View>
    <Text>
      
      Hello im a student in cis 340
     
      </Text>
      
     </View>
     
    
  );
}
export default function MultiComp(){
  return (
    <View style= {{flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
<Text> Welcome to my class 
</Text>
<HannahApp />
<HannahApp />
<HannahApp />
<HannahApp />
    </View>
  )
}
