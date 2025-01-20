import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const ComponentD = () => {
  const userContext =  useContext(UserContext)
  if(!userContext) {
    throw new Error("useContext must be used within a UserProvider")
  }
  const {user, setUser} = userContext
  return (
    <View>
      <Text>UserName:{user}</Text>
    </View>
  )
}

export default ComponentD