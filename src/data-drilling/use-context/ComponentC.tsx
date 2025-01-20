import { View, Text } from 'react-native'
import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = () => {
  return (
    <View>
      <Text>ComponentC</Text>
      <ComponentD />
    </View>
  )
}

export default ComponentC