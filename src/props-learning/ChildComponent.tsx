import { View, Text } from 'react-native'
import React from 'react'

interface ChildComponentProps {
    name: string
    age: number
    hobbies: string[]
}


const ChildComponent = ({name, age, hobbies}:ChildComponentProps) => {
  return (
    <View>
      <Text>This is ChildComponent.</Text>
      <Text>My name is {name}.And I'm {age} years old.My hobbies are {hobbies}</Text>
    </View>
  )
}

export default ChildComponent