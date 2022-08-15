import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    Avatar,
    Text,
    } from 'react-native-paper';
   

const AllStatsScreen =({navigation}) => {
    return (

       
        
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center',}} >
            <View style={styles.container1}>

            <View style={{flexDirection:'column'}}>
            
            <View style={{flexDirection:'row',padding:10,justifyContent: 'center', alignItems: 'center' }}>
           <TouchableOpacity>
           <View style={{justifyContent: 'center', alignItems: 'center', padding:20 }} >
                <View  style={{borderColor:'white',borderWidth:2, borderRadius:50,}}>
                <Avatar.Image
                   source={require('./images/pubg.jpg')} 
                   size={70}
                    />
                </View>
            </View>
           </TouchableOpacity>
            
           <TouchableOpacity>
           <View style={{justifyContent: 'center', alignItems: 'center', padding:20 }} >
                <View  style={{borderColor:'white',borderWidth:2, borderRadius:50,}}>
                <Avatar.Image
                   source={require('./images/nitro1.jpg')} 
                   size={70}
                    />
                </View>
            </View>
           </TouchableOpacity>
            </View>


            <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <View style={{backgroundColor:'#FF5412', borderRadius:2, width:260, height:5,justifyContent: 'center', alignItems: 'center',}}> 
            </View>

            </View>
            

            <View style={{flexDirection:'row',padding:10, justifyContent: 'center', alignItems: 'center' }}>
           <TouchableOpacity>
           <View style={{justifyContent: 'center', alignItems: 'center', padding:20 }} >
                <View  style={{borderColor:'white',borderWidth:2, borderRadius:50,}}>
                <Avatar.Image
                   source={require('./images/need1.jpg')} 
                   size={70}
                    />
                </View>
            </View>
           </TouchableOpacity>
            
           <TouchableOpacity>
           <View style={{justifyContent: 'center', alignItems: 'center', padding:20 }} >
                <View  style={{ justifyContent: 'center', alignItems: 'center', borderColor:'white',borderWidth:2, borderRadius:50, backgroundColor:'black',width:72,height:72,}}>
                <Text style={{color:'#FF5412',fontSize:30,}}>All</Text>
                </View>
            </View>
           </TouchableOpacity>  
            </View>







            </View>
            </View>
        </View>
    );
};
export default AllStatsScreen;

const styles = StyleSheet.create({
    container1:{
        width: 300,
        height:'43%',
        backgroundColor: 'black',
        borderRadius: 10,
        elevation: 50,
        marginTop:30,
    },
    

})