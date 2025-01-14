import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <View>
      <ChildComponent name="Cyber" age={22} hobbies={["Cooking", "Coding"]} />
    </View>
  )
}

export default ParentComponent