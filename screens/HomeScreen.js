import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { 
     
  Avatar,
  
  TouchableRipple,
  } from 'react-native-paper';
const HomeScreen =({navigation}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
         
         
         <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('Nitro')}
                         title="nitro"
                         />
           <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('Registration')}
                         title="reg"
                         />
                           <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('Swwiper')}
                         title="Swwiper"
                         />
                           <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('AllStats')}
                         title="All stats"
                         />
                          <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('Stats')}
                         title=" stats"
                         />
                          <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('NeedForSpeed')}
                         title=" need for speed"
                         />
                         <Button
                        color='#FF5412'
                        onPress={() => navigation.navigate('Pubg')}
                         title=" pubg"
                         />
        </View>
       
      );

};
export default HomeScreen;
