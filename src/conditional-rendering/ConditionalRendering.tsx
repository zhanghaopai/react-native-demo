import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = () => <Text>Password is valid</Text>
const InvalidPassword = () => <Text>Password is invalid</Text>

const Password = ({ isValid }) => {
    if (isValid) {
        return <ValidPassword />
    } else {
        return <InvalidPassword />
    }
}



const ConditionalRendering = () => {
    return (
        <View>
            <Password isValid={false} />
        </View>
    )
}

export default ConditionalRendering