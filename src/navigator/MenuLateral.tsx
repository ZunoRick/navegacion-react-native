import React from 'react'

import { 
  createDrawerNavigator, 
  DrawerContentComponentProps, 
  DrawerContentScrollView 
} from '@react-navigation/drawer';

import { 
  Image, 
  Text, 
  useWindowDimensions, 
  View, 
  TouchableOpacity 
} from 'react-native';

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: isLargeScreen ? null : { width: '80%' },
        drawerType: isLargeScreen ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: isLargeScreen ? false : true,  // Oculta la hamburguesa
      }}
      drawerContent = { (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }:DrawerContentComponentProps ) => (
  <DrawerContentScrollView>
    
    {/* Parte del avatar */}
    <View style = { styles.avatarContainer }>
      <Image
        source = {{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
        }}
        style= { styles.avatar }
      />
    </View>

    {/* Menu Options */}
    <View style={ styles.menuContainer }>
      <TouchableOpacity 
        style={ styles.menuBoton }
        onPress = { () => navigation.navigate('Tabs') }
      >
        <Text style={ styles.menuTexto }>Navegación</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={ styles.menuBoton }
        onPress = { () => navigation.navigate('SettingsScreen') }
      >
        <Text style={ styles.menuTexto }>Ajustes</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
)