import  React from 'react';
import { Text, Image, ScrollView } from 'react-native';
const dog ={
  uri:'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg',
  width: 64,
  height:64
};
export default MyScrollViewApp =()=> (
 

    <ScrollView style={{padding:40}}>
<Text style= {{fontSize:40}}> Try to scroll down
</Text>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Text style= {{fontSize:40}}> Try to scroll down again
</Text>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Text style= {{fontSize:40}}> Try to scroll down again
</Text>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Text style= {{fontSize:40}}> Try to scroll down again
</Text>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
<Image source ={dog}>
</Image>
    </ScrollView>
  
)


