import { View, Text } from 'react-native'
import React from 'react'
import WithoutState from './WithoutState'
import WithState from './WithState'

const BasicCounter = () => {
  return (
    <View>
      <Text>This is basic counter without states:</Text>
      <WithoutState />
      <Text>This is basic counter with states:</Text>
      <WithState />
    </View>
  )
}

export default BasicCounter