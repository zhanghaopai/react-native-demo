import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const WithState = () => {
    const [count, setCount] = useState(0)
    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" color="pink" onPress={() => setCount(count + 1)} />
            <Button title="Decrement" onPress={() => setCount(count - 1)} />
            <Button title="Reset" color="purple" onPress={() => setCount(0)} />
        </View>
    )
}

export default WithState