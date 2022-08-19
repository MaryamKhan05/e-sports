import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

const HomeScreen =({navigation}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Button
          onPress={() => navigation.navigate('Nitro')}
          title='nitro'/>
          <Button
          onPress={() => navigation.navigate('AllStats')}
          title='All stats'/>
          <Button
          onPress={() => navigation.navigate('Stats')}
          title='stats'/>
          <Button
          onPress={() => navigation.navigate('NeedForSpeed')}
          title='NeedForSpeed'/>
          <Button
          onPress={() => navigation.navigate('Pubg')}
          title='Pubg'/>
          <Button
          onPress={() => navigation.navigate('Setting')}
          title='Setting'/>
          <Button
          onPress={() => navigation.navigate('Tab')}
          title='tab'/>
         
         
       
        </View>
       
      );

};
export default HomeScreen;
