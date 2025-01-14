import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
    const [friends, setFriends] = useState(["Cyber"])
    const [inputText, setInputText] = useState('')
    return (
        <View>
            <FlatList
                data={friends}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder='Enter a friend name'
            />

            <Button
                title="Add Friend"
                onPress={() => {
                    setFriends([...friends, inputText]);
                    setInputText('');
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 6,
    },
});


export default UpdateArray