import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import React, { useReducer, useState } from 'react'

interface Profile {
    id: string;
    name: string;
    age: number;
}

interface State {
    profiles: Profile[];
}

interface AddProfileAction {
    type: 'add';
    payload: { name: string; age: number };
}

interface DeleteProfileAction {
    type: 'delete';
    payload: string;
}

interface UpdateProfileAction {
    type: 'update';
    payload: { id: string; name: string; age: number };
}

type Action = AddProfileAction | DeleteProfileAction | UpdateProfileAction;


const initialState = { profiles: [] };
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'add':
            return { profiles: [...state.profiles, { id: Date.now().toString(), name: action.payload.name, age: action.payload.age }] };
        case 'delete':
            return { profiles: state.profiles.filter(profile => profile.id !== action.payload) };
        case 'update':
            return { profiles: state.profiles.map(profile => profile.id === action.payload.id ? { id: action.payload.id, name: action.payload.name, age: action.payload.age } : profile) };
        default:
            return state;
    }

}

const MyReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState(null);
    return (
        <View>
            <TextInput style={styles.input} placeholder='name' value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder='age' value={age} onChangeText={setAge} />
            {id ? <Button title='Update' onPress={() => { dispatch({ type: 'update', payload: { id, name, age: Number(age) } }); setId(null); setName(''); setAge('') }} /> : <Button title='Add' onPress={() => { dispatch({ type: 'add', payload: { name, age: Number(age) } }); setName(''); setAge('') }} />}
            <FlatList
                data={state.profiles}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{item.name}</Text>
                        <Text>{item.age}</Text>
                        <Button title='Edit' onPress={() => { setName(item.name); setAge(item.age.toString()); setId(item.id) }} />
                        <Button title='Delete' onPress={() => dispatch({ type: 'delete', payload: item.id })} />
                    </View>
                )}
                keyExtractor={item => item.id} />
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

export default MyReducer