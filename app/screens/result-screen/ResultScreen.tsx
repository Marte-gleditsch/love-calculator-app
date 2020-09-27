import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { SmallText } from '/Users/martegleditsch/LoveCalculator/app/components/index'
import { NavigationProp } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<any>
}

function ResultScreen(props: Props) {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Initial')}>
        <SmallText>{'Ny test'}</SmallText>
      </TouchableOpacity>
    </View>
  )
}

export default ResultScreen
