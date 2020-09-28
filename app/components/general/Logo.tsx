import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { SmallTextBold } from '/Users/martegleditsch/LoveCalculator/app/components/index'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

type Props = {
  style?: StyleProp<ViewStyle>
}

function Logo(props: Props) {
  return <SmallTextBold style={[{ color: colors.orange }, props.style]}>{'LOVE ♥ CALCULATOR'}</SmallTextBold>
}

export default Logo
