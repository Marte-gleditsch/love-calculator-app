import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { View } from 'react-native'
import NavigationButton from '/Users/martegleditsch/LoveCalculator/app/components/buttons/NavigationButton'

type Props = {
  navigation: NavigationProp<any>
}

function InitialScreen(props: Props) {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <NavigationButton onPress={() => props.navigation.navigate('Input')} text={'Ja, jeg vil prøve'} />
    </View>
  )
}

export default InitialScreen
