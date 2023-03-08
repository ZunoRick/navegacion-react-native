import { StyleSheet } from "react-native";

export const colores = {
  primary: '#5856D6',
  secondary: '#fba748ff',
  bgTabButton: 'rgba(60, 124, 243, 0.295)',
  secondaryContainer: "rgb(205, 231, 236)"
}

export const styles = StyleSheet.create({
    globalMargin: {
      marginHorizontal: 20
    },
    title:{
      fontSize: 30,
      marginBottom: 10
    },
    botonGrande:{
      width: 100,
      height: 100,
      backgroundColor: 'red',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10
    },
    botonGrandeTexto: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    avatarContainer: {
      alignItems: 'center',
      marginTop: 20
    },
    avatar:{
      width: 150,
      height: 150,
      borderRadius: 100
    },
    menuContainer:{
      marginVertical: 30,
      marginHorizontal: 50
    },
    menuBoton:{
      marginVertical: 10
    },
    menuTexto: {
      fontSize: 20
    },
    drawerItem:{
      flexDirection: 'row'
    },
    drawerItemIcon:{
      marginRight: 10
    }
});