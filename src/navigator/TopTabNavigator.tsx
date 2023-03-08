import React from 'react'
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { colores } from '../theme/appTheme';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{
        paddingTop
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
        tabBarPressColor:colores.bgTabButton,
        tabBarShowIcon: true,
        tabBarIndicatorStyle:{
          backgroundColor: colores.primary
        },
        tabBarStyle:{
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold'
        },
        tabBarIcon: ({ color, focused }) =>{
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'car-outline'
              break;

            case 'Contacts':
              iconName = 'finger-print'
              break;

            case 'Albums':
              iconName = 'options'
              break;
          
            default:
              break;
          }
          
          return <Icon name={ iconName } size={25} color={ color } />
        }
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}