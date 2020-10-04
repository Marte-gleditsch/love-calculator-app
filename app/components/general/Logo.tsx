import React from 'react'
import { StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import SmallTextBold from '/Users/martegleditsch/LoveCalculator/app/components/text/SmallTextBold'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

type Props = {
  style?: StyleProp<ViewStyle>
  navigation: NavigationProp<any>
}

function Logo(props: Props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Initial')}>
      <SmallTextBold style={[{ color: colors.orange }, props.style]}>{'LOVE ♥ CALCULATOR'}</SmallTextBold>
    </TouchableOpacity>
  )
}

export default Logo
