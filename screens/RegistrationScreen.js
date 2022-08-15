import * as React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    Avatar,
    Text,
    TouchableRipple,
    } from 'react-native-paper';

    const RegistrationScreen =({navigation}) => {
        return (
         


            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center',}} >
                 <View style={styles.container1}>
                 <View style={{}}>
                 <View style={{justifyContent: 'center', alignItems: 'center',marginTop:-50, }}>
                 <Avatar.Image
                    source={require('./images/nitro1.jpg')} 
                    size={90}
                 />
                 </View>
                 </View>

                 </View>
               
            </View>

        );
    }
    export default RegistrationScreen;
    const styles = StyleSheet.create({
        container1:{
            width: 350,
            height:'70%',
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 50,
            //marginTop:30,
        },
        view: {
           
            
            width: 350,
            height:'20%',
            backgroundColor: 'white',
            borderRadius: 30,
            elevation: 50,
            marginTop:30,
        },
    })