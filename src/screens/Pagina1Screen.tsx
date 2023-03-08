import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{

}

export const Pagina1Screen = ( { navigation }:Props ) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina1Screen</Text>

      <Button
        title='Ir página 2'
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      <Text style={{
        marginVertical:20,
        fontSize: 20,
        marginLeft: 5
      }}>Navegar con argumentos</Text>
      <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity
          style= {{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          }) }
        >
          <Icon style={ styles.drawerItemIcon } name='fast-food' size={25} color="white" />
          <Text style={ styles.botonGrandeTexto }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style= {{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'María'
          }) }
        >
          <Icon style={ styles.drawerItemIcon } name='flask' size={25} color="white" />
          <Text style={ styles.botonGrandeTexto }>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
