import { View, Text } from 'react-native'
import React from 'react'
import { UserProvider } from './context/UserContext';
import ComponentB from './ComponentB';

const ComponentA = () => {
    const name = "Cyber";
    return (
        <View>
            <Text>ComponentA</Text>
            <UserProvider >
                <ComponentB />
            </UserProvider>
        </View>
    )
}

export default ComponentA