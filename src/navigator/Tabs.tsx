import React from 'react';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
              iconName = 'T1'
              break;

            case 'Tab2Screen':
              iconName = 'T2'
              break;

            case 'StackNavigator':
              iconName = 'ST'
              break;
          
            default:
              break;
          }
          
          return <Text style={{ color }}>{ iconName }</Text>
        }
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
              iconName = 'T1'
              break;

            case 'Tab2Screen':
              iconName = 'T2'
              break;

            case 'StackNavigator':
              iconName = 'ST'
              break;
          
            default:
              break;
          }
          
          return <Text style={{ color }}>{ iconName }</Text>
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