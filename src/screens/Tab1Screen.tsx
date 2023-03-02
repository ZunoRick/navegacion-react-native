import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab 1 Screen');
  }, [])
  
  return (
    <View style={{ 
      ...styles.globalMargin,
      marginTop: top + 10
    }}>
      <Text style={ styles.title }>Iconos</Text>
      <Text>
        <Icon name="logo-nodejs" size={50} color={ colores.primary } />
        <Icon name="logo-react" size={50} color={ colores.primary } />
        <Icon name="logo-python" size={50} color={ colores.primary } />
        <Icon name="logo-octocat" size={50} color={ colores.primary } />
        <Icon name="logo-github" size={50} color={ colores.primary } />
        <Icon name="logo-twitch" size={50} color={ colores.primary } />
        <Icon name="logo-xbox" size={50} color={ colores.primary } />
        <Icon name="logo-tux" size={50} color={ colores.primary } />
        <Icon name="logo-playstation" size={50} color={ colores.primary } />
        <Icon name="logo-javascript" size={50} color={ colores.primary } />
        <Icon name="logo-laravel" size={50} color={ colores.primary } />
        <Icon name="logo-npm" size={50} color={ colores.primary } />
        <Icon name="logo-sass" size={50} color={ colores.primary } />
        <Icon name="logo-steam" size={50} color={ colores.primary } />
        <Icon name="logo-tumblr" size={50} color={ colores.primary } />
        <Icon name="logo-twitter" size={50} color={ colores.primary } />
        <Icon name="logo-whatsapp" size={50} color={ colores.primary } />
        <Icon name="logo-instagram" size={50} color={ colores.primary } />
        <Icon name="logo-youtube" size={50} color={ colores.primary } />
      </Text>
    </View>
  )
}
