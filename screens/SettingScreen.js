import * as React from 'react';
import { View, StyleSheet, Image,ScrollView,TouchableOpacity,Switch,} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    Avatar,
    Text,
    TouchableRipple,
    } from 'react-native-paper';
   

const SettingScreen =({navigation}) => {
   
    return (
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,10)', justifyContent: 'center', alignItems: 'center',}}>
            
              <View style={styles.container1}>

                <View style={styles.heading}>
                    <View>
                        <Text style={{color:'#FF5412',  fontWeight:'bold',paddingTop:30, paddingBottom:10, shadowColor:'black', shadowOpacity:10, fontSize:17, }}>General Settings</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                         <View style={styles.divider}> </View>
                    </View>
                </View>

                <View style={{flexDirection:'row',}}>
                <View style={{flexDirection:'row',padding:20}}>
                    <View>
                        <Text style={{fontWeight:'bold',paddingLeft:25,paddingTop:24,}}>Notification On/Off</Text>
                    </View>
                    <View>
                    <Icon onPress={{}} style={{paddingLeft:80,}} name="toggle-switch" size={60} />
                    </View>

                </View>


                </View>
             







              </View>

        </View>

    );
};
export default SettingScreen;
const styles = StyleSheet.create({
    container1:{
        width: 350,
        height:'85%',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 50,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        textShadowOffset: {width:1, height:1, },
        textShadowRadius: 20,
        textShadowColor: 'black',
    },
    divider:{
        backgroundColor:'#FF5412',
        width:290, 
        height:3,
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop:5

    }
})