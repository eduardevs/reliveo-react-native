import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { IndexPlus } from "../screens/MenuPlus/IndexPlus";
import { Contact } from "../screens/MenuPlus/Contact";
import { SettingsUser } from "../screens/MenuPlus/SettingsUser";
import { InfoApp } from "../screens/MenuPlus/InfoApp";
import { InfoProject } from "../screens/MenuPlus/InfoProject";

const Stack = createNativeStackNavigator();

export const MenuPlusNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="IndexPlus"
      >
        <Stack.Screen
        name="IndexPlus"
        component={IndexPlus}
        options={{
          animation: 'slide_from_right',
        }} />
        <Stack.Screen
        name="InfoProject"
        component={InfoProject}
        options={{
          animation: 'slide_from_right',
        }}  />
        <Stack.Screen name="InfoApp" component={InfoApp} />
        <Stack.Screen name="SettingsUser" component={SettingsUser} />
        <Stack.Screen name="Contact" component={Contact} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
