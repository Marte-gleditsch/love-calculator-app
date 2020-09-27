import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { View, TouchableOpacity } from 'react-native'
import { SmallText } from '/Users/martegleditsch/LoveCalculator/app/components/index'

type Props = {
  navigation: NavigationProp<any>
}

function InitialScreen(props: Props) {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Input')}>
        <SmallText>{'Ja, jeg vil prøve'}</SmallText>
      </TouchableOpacity>
    </View>
  )
}

export default InitialScreen
