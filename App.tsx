import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from '/Users/martegleditsch/LoveCalculator/app/screens/initial-screen/InitialScreen'
import InputScreen from '/Users/martegleditsch/LoveCalculator/app/screens/input-screen/InputScreen'
import ResultScreen from '/Users/martegleditsch/LoveCalculator/app/screens/result-screen/ResultScreen'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Initial' component={InitialScreen} />
        <Stack.Screen name='Input' component={InputScreen} />
        <Stack.Screen name='Result' component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
