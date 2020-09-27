import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { SmallTextBold } from '/Users/martegleditsch/LoveCalculator/app/components/index'

type Props = {
  onPress: () => void
  text: string
}

function NavigationButton(props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <SmallTextBold>{props.text}</SmallTextBold>
    </TouchableOpacity>
  )
}

export default NavigationButton
