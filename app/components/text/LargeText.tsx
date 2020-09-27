import { Text, StyleProp, TextStyle } from 'react-native'
import baseStyles from '/Users/martegleditsch/LoveCalculator/app/config/base-texts'
import React from 'react'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter'

type Props = {
  style: StyleProp<TextStyle>
  children: string
}

function LargeText(props: Props) {
  const [font] = useFonts({ Inter_400Regular })
  if (!font) return null
  return <Text style={[baseStyles.largeText, props.style, { fontFamily: 'Inter_400Regular' }]}>{props.children}</Text>
}

export default LargeText
