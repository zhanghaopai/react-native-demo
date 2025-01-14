import { View, Text, FlatList } from 'react-native'
import React from 'react'

const AndOperator = () => {
    const groceries = ["milk", "bread", "eggs", "butter"]
    return (
        <View>
            <Text>Cart</Text>
            {groceries.includes("milk") && <Text>Milk</Text>}
            <FlatList
                data={groceries}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>
    )
}

export default AndOperator