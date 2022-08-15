import React, { Component } from 'react';
import { StyleSheet,
View,
Text } from 'react-native';
import Swiper from 'react-native-swiper';

const Screens =({navigation}) =>   {
return (
<Swiper style={styles.wrapper} 
loop={false} 

>
<View style={styles.slide1}>
<Text style={styles.text}>Slide1</Text>
</View>
<View style={styles.slide2}>
<Text style={styles.text}>Slide2</Text>
</View>
</Swiper>
);
}
export default Screens ;

const styles = StyleSheet.create({ wrapper: {
},
slide1: { flex: 1,
justifyContent: 'center', alignItems: 'center',
},
slide2: { flex: 1,
justifyContent: 'center', alignItems: 'center',
},
text: {
color: '#0a0a0a', fontSize: 25, fontWeight: 'bold'
},
dot:{
    backgroundColor:'rgba(0,0,0,.2)',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
}
});