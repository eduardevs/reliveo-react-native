import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Colors } from '../Components/styles'
import { Login } from '../screens/Login'
import { ProfileSignup } from '../screens/Signup/ProfileSignup'
import { Signup } from '../screens/Signup/Signup'
import { Welcome } from '../screens/Welcome'
import { ProfileMusic } from '../screens/Signup/ProfileMusic'

const { primary, secondary, ternary } = Colors

const Stack = createNativeStackNavigator();


export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyled: {
            backgroundColor: 'transparent'
          },
          headerTintColor: ternary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20
          }
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ProfileSignup" component={ProfileSignup} />
        <Stack.Screen name="ProfileMusic" component={ProfileMusic} />
        <Stack.Screen name="Welcome" component={Welcome} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
