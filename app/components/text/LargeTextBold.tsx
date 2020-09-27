import { Text, StyleProp, TextStyle } from 'react-native'
import baseStyles from '/Users/martegleditsch/LoveCalculator/app/config/base-texts'
import React from 'react'
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter'

type Props = {
  style?: StyleProp<TextStyle>
  children: string
}

function LargeTextBold(props: Props) {
  const [font] = useFonts({ Inter_700Bold })
  if (!font) return null
  return <Text style={[baseStyles.largeTextBold, props.style, { fontFamily: 'Inter_700Bold' }]}>{props.children}</Text>
}

export default LargeTextBold
