import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTabNavigator';

export const Tabs = () =>{
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndriod = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  const theme = useTheme();
  
  return (
    <BottomTabAndriod.Navigator
      sceneAnimationEnabled={ true }
      labeled={true}
      activeColor='#fff'
      inactiveColor="#20054a"
      barStyle={{ 
        backgroundColor: colores.primary
      }}
      screenOptions= { ({ route }) => ({
        tabBarIcon: ({ color, focused }) =>{
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home-outline'
              break;

            case 'Tab2Screen':
              iconName = 'file-tray-outline'
              break;

            case 'StackNavigator':
              iconName = 'list-outline'
              break;
          
            default:
              break;
          }
          
          return <Icon name={ iconName } size={30} color={ color } />
        },
        tabBarBadge: 10,
      })}
    >
      <BottomTabAndriod.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabAndriod.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTapNavigator } />
      <BottomTabAndriod.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndriod.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused, size }) =>{
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home-outline'
              break;

            case 'Tab2Screen':
              iconName = 'file-tray-outline'
              break;

            case 'StackNavigator':
              iconName = 'list-outline'
              break;
          
            default:
              break;
          }
          
          return <Icon name={ iconName } size={ size } color={ color } />
        }
      })}
    >
      {/* <BottomTabIOS.Screen 
        name="Tab1Screen" 
        options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} 
        component={Tab1Screen} 
      /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2'}} component={ TopTapNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}