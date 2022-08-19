import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import DrawerContent from './screens/DrawerContent';
import UpdateScreen from './screens/UpdateScreen';
import AsphaltNitroScreen from './screens/AsphaltNitroScreen';
//import RegistrationScreen from './screens/RegistrationScreen';
//import Screens from './screens/Screens';
import AllStatsScreen from './screens/AllStatsScreen';
import StatsScreen from './screens/StatsScreen';
import Needforspeedstatsscreen from './screens/Needforspeedstatsscreen';
import PubgStatsScreen from './screens/PubgStatsScreen';
import SettingScreen from './screens/SettingScreen';
import TabViewScreens from './screens/TabViewScreens';

/*function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}*/

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      
      
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      //drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContent={props => <DrawerContent {...props} />}
      
    >
       <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Update" component={UpdateScreen} />
      <Drawer.Screen name="Nitro" component={AsphaltNitroScreen} />
      <Drawer.Screen name="AllStats" component={AllStatsScreen} />
      <Drawer.Screen name="Stats" component={StatsScreen} />
      <Drawer.Screen name="NeedForSpeed" component={Needforspeedstatsscreen} />
      <Drawer.Screen name="Pubg" component={PubgStatsScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Tab" component={TabViewScreens} />




    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}