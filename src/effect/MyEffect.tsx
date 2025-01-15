import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyEffect = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [warning, setWarning] = useState('');
    useEffect(() => {
        setWarning('Count2 changed/'+count1+'/'+count2)
    }, [count2]);

    return (
        <View>
            <Text>{warning}</Text>
            <Text>Count1 without effect:{count1}</Text>
            <Button title="Increment Count1" onPress={() => setCount1(count1 + 1)} />
            <Text>Count2 with effect:{count2}</Text>
            <Button title="Increment Count2" onPress={() => setCount2(count2 + 1)} />
        </View>
    )
}

export default MyEffect