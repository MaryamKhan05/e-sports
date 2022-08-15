import * as React from 'react';
import { View,  Button,TextInput, SafeAreaView, StyleSheet, } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
     useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch} from 'react-native-paper';
   

const UpdateScreen =({navigation}) => {

    return (
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,10)', justifyContent: 'center', alignItems: 'center',}} >
            <View style={{width: '80%', height:'90%',backgroundColor: 'white',paddingHorizontal: 20,paddingVertical: 80,borderRadius: 20,elevation: 50,}}>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <View style={{   backgroundColor: 'black', height:100, width:100, borderRadius:20, justifyContent: 'center', alignItems: 'center' }} >
                <View  style={{borderColor:'white',borderWidth:4, borderRadius:50,}}>
                <Avatar.Image
                   source={require('./images/nitro1.jpg')} 
                   size={70}
                   
                   />
                </View>
                </View>
                </View>
               
            <View style={{paddingTop:25, paddingLeft:20, paddingRight:20,}}>
                <SafeAreaView>
                    <View style={styles.searchSection}>
                    <TextInput
                    style={styles.input}
                    placeholder='maryam'
                    />
                    <Icon style={styles.searchIcon} name="pencil" size={20} color="#FF5412"/>

                    </View>
                    

                    <View style={styles.searchSection}>
                    <TextInput
                    style={styles.input}
                    placeholder='maryam@gmail.com'
                    />
                    <Icon style={styles.searchIcon} name="pencil" size={20} color="#FF5412"/>

                    </View>

                    <View style={styles.searchSection}>
                    <TextInput
                    style={styles.input}
                    placeholder='*******'
                    />
                    <Icon style={styles.searchIcon} name="pencil" size={20} color="#FF5412"/>

                    </View>
                   
                </SafeAreaView>
                <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <View style={styles.button}>
                        <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('')}
                         title="Save"
                         />
                     </View>

                </View>
                
              
            </View>
                
            </View>
        
        </View>
    );

};
export default UpdateScreen;
const styles = StyleSheet.create({
   /* input: {
      height: 30,
      margin: 2,
      borderWidth: 0,
      padding: 15,
      paddingBottom:15,
      borderRadius:20, 
      backgroundColor:'lightgrey',
      width:240,
    },*/
    button:{
        
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderRadius: 20,
        backgroundColor: '#FF5412',
        margin:40,   
    },
      searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'lightgrey',
        borderRadius:20,
        //paddingBottom:10,
        padding:5,
        paddingLeft:20,
        margin:2,
        height:30,
    },
    searchIcon: {
       padding: 5,
    },
    input: {
        flex: 1,
        
        
        backgroundColor:'lightgrey',
        
    },
  });