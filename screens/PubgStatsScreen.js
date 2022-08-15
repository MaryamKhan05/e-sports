import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,ScrollView,} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    Avatar,
    Text,
    TouchableRipple,
    } from 'react-native-paper';
   

const AsphaltNitroScreen =({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,10)', justifyContent: 'center', alignItems: 'center',}} >
            <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <TouchableOpacity>
                <Icon onPress={() => navigation.navigate('')} style={{padding:10,}} name="bars" size={40} color ='white'/>

                </TouchableOpacity>
           
            </View>
            
            <View style={styles.container1}>
               
                <Text style={{padding:10, fontWeight:'bold', color :'#FFB85D', fontStyle:'oswald', fontSize:20,paddingLeft:24,}}>Game Winner 
                    <Icon style={{padding:10,}} name="trophy" size={20} color ='#FFB85D'/>
                </Text>

                <View style={{ flexDirection: 'row',}}>
                <View style={{ flexDirection: 'column', paddingBottom:60,paddingTop:10, paddingLeft:10,fontWeight:'bold',}}>
                <View style={{flexDirection: 'row',paddingLeft:10,margin:2,}}>
                <Text>Name: </Text><Text style={{paddingLeft:15}}>Name</Text>
                </View>
                <View style={{flexDirection: 'row',paddingLeft:10,margin:2,}}>
                <Text>Game: </Text><Text style={{paddingLeft:15}}>Game</Text>
                </View>

                </View>
                
                <View style={{paddingBottom:100,}}>
                    <View style={{paddingBottom:200,paddingHorizontal:120, marginTop:-25,   }}>
                    <Avatar.Image
                    source={require('./images/pubg.jpg')} 
                    size={70}
                    />
                    </View>
                    </View>

              
                
                </View>
            </View>
            </ScrollView>
        </View>      
    );
};
export default AsphaltNitroScreen;

const styles = StyleSheet.create({
    container1:{
        width: 350,
        height:'25%',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 50,
       

    }
})