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
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import { colores } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeftLabelVisible: false,
        drawerStyle: isLargeScreen ? null : { width: '80%' },
        drawerType: isLargeScreen ? 'permanent' : 'front', // Menú modo horizontal
        //headerShown: isLargeScreen ? false : true,  // Oculta la hamburguesa
        headerLeft: () => (
          <TouchableOpacity
            style={{
              marginLeft: 10
            }}
            onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
          >
            <Icon 
              name="chevron-forward" 
              color={ colores.primary }
              size={35}
            />
          </TouchableOpacity>
        ),
        // headerBackground: () => (<View style={{ backgroundColor: 'red', height: 50}}></View>)
      })}
      drawerContent = { (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } 
        options={{
          headerLeftLabelVisible: false,
          drawerLabel: () => null,
        }}
      />
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
        <View style={ styles.drawerItem }>  
          <Icon style={ styles.drawerItemIcon } name='game-controller' size={25} color={colores.primary} />
          <Text style={ styles.menuTexto }>Navegación</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={ styles.menuBoton }
        onPress = { () => navigation.navigate('SettingsScreen') }
      >
        <View style={ styles.drawerItem }>
          <Icon style={ styles.drawerItemIcon } name='wifi' size={25} color={colores.primary} />
          <Text style={ styles.menuTexto }>Ajustes</Text>
        </View>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
)