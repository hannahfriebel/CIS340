import React from 'react';
import {Text} from 'react-native';

export default function HannahApp() {

  function getFullName(fName,mName,lName){
    return fName+" "+ mName+" "+lName;
  }
  const pet ="dog";
  return (
    <Text>
       {"\n\n\n\n\n\n"}
      Hello im a student in cis 340{"\n"}
      My full name is {getFullName("Hannah","Elisabeth","Friebel")}{"\n"}
      I have a {pet}!
      </Text>
     
    
  );
}

