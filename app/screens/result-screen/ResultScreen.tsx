import React from 'react'
import { View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import NavigationButton from '/Users/martegleditsch/LoveCalculator/app/components/buttons/NavigationButton'

type Props = {
  navigation: NavigationProp<any>
}

function ResultScreen(props: Props) {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <NavigationButton onPress={() => props.navigation.navigate('Initial')} text={'Nytt søk'} />
    </View>
  )
}

export default ResultScreen
