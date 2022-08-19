import * as React from 'react';
import { View,  StyleSheet, Dimensions, StatusBar,Button,TextInput, TouchableOpacity,ScrollView, } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    Avatar,
    Text,} from 'react-native-paper';


   

const FirstRoute = () => (


    //------PROFILE SCREEN-----////


    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}} >
    
        <View style={{justifyContent: 'center', alignItems: 'center',height:100,}}>
        <View style={{   backgroundColor: 'black', height:80, width:80, borderRadius:50, justifyContent: 'center', alignItems: 'center' }} >
        <View  style={{borderColor:'white',borderWidth:2, borderRadius:50,}}>
        <TouchableOpacity>
        <Avatar.Image
           source={require('./images/avatar2.jpg')} 
           size={70}
        
        />
        <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Icon style={{position:'absolute',justifyContent: 'center', alignItems: 'center', padding:20,marginTop:-70,opacity:0.8}} name="camera-plus" size={23} color="white"/>
        </View>   
        </View>
        </TouchableOpacity>
        </View>
        </View>
        </View>
       
         <View style={{}}>
            <View style={{paddingTop:20,}}>

            <View style={{padding:3}}>
            <View style={styles.searchSection}>
                <TextInput
                style={styles.input}
                placeholder="Maryam"
                underlineColorAndroid="transparent"/>
                <Icon style={styles.searchIcon} name="pencil-outline" size={23} color="#FF5412"/>
            </View>
            </View>
            
            <View style={{padding:3}}>
            <View style={styles.searchSection}>
                <TextInput
                style={styles.input}
                placeholder="maryam@gmail.com"
                underlineColorAndroid="transparent"/>
                <Icon style={styles.searchIcon} name="pencil-outline" size={23} color="#FF5412"/>
            </View>
            </View>
            <View style={{padding:3}}>
            <View style={styles.searchSection}>
                <TextInput
                style={styles.input}
                placeholder="****"
                underlineColorAndroid="transparent"/>
                <Icon style={styles.searchIcon} name="pencil-outline" size={23} color="#FF5412"/>
            </View>
            </View>
           
            </View>
            

       
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
);

//-----AWARD SCREEN-----//
 
const SecondRoute = () => (
    
        
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,10)', justifyContent: 'center', alignItems: 'center',}} >
    <ScrollView 
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}>
    <View style={styles.container1}> 
    <Text style={{padding:10, fontWeight:'bold', color :'#FF5412', fontStyle:'oswald', fontSize:20,paddingLeft:24,}}>Game Winner 
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
                <View style={{paddingBottom:200,paddingHorizontal:120, marginTop:-25, paddingRight:25,  }}>
                    <Avatar.Image
                    source={require('./images/pubg.jpg')} 
                    size={70}
                    />
                </View>
            </View>
            </View>             
    </View>

    <View style={styles.container1}> 
    <Text style={{padding:10, fontWeight:'bold', color :'#FF5412', fontStyle:'oswald', fontSize:20,paddingLeft:24,}}>Game Winner 
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
                <View style={{paddingBottom:200,paddingHorizontal:120, marginTop:-25, paddingRight:25,  }}>
                    <Avatar.Image
                    source={require('./images/pubg.jpg')} 
                    size={70}
                    />
                </View>
            </View>
            </View>             
    </View>

    <View style={styles.container1}> 
    <Text style={{padding:10, fontWeight:'bold', color :'#FF5412', fontStyle:'oswald', fontSize:20,paddingLeft:24,}}>Game Winner 
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
                <View style={{paddingBottom:200,paddingHorizontal:120, marginTop:-25, paddingRight:25,  }}>
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

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  profile: FirstRoute,
  award: SecondRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'profile', title: 'Profile' },
    { key: 'award', title: 'Award' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={props => <TabBar {...props} style={{backgroundColor: 'black'}} indicatorStyle={{backgroundColor:'#FF5412', padding:2,}}/>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor:'#O3OAO4',
  },
  scene: {
    flex: 1,
  },
  
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
        backgroundColor: 'lightgrey',
        borderRadius:20,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: 'lightgrey',
        color: '#424242',
        borderRadius:20,
        width:230,
    },
    container1:{
        width: 350,
        height:'8%',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 50,
        marginTop:30,
    },
    
   
});
