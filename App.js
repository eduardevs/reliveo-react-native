import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RootStack } from './src/navigators/RootStack';

export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return <RootStack />;
}
