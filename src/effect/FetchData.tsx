import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            setData(data);
        }
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }

    }, []);
    return (
        <View>
            <Text>Id:{data.id}</Text>
            <Text>Title:{data.title}</Text>
            <Text>Completed:{data.completed?"True":"False"}</Text>
        </View>
    )
}

export default FetchData