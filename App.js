import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/theme/palette';
import { useState } from 'react';
import { View, ActivityIndicator, SafeAreaView, Text, StatusBar, Button } from 'react-native';
// import { RootStack } from './src/navigators/RootStack';
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="hello"
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
        </View>
    );
};

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details</Text>
            <Button
                title="hello"
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
        </View>
    );
};

const { secondary } = colors;

export default function App() {
    // return <RootStack />;
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent',
                    },
                    headerTintColor: secondary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    },
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
