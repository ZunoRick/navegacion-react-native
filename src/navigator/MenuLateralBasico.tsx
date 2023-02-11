import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: isLargeScreen ? null : { width: '80%' },
        drawerType: isLargeScreen ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: isLargeScreen ? false : true,  // Oculta la hamburguesa
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}