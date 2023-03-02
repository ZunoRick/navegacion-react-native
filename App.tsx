import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider } from 'react-native-paper';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider theme={theme}>
        <NavigationContainer>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico/> */}
          <MenuLateral />
          {/* <Tabs/> */}
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App