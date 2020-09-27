import React from 'react'
import { StyleSheet, TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native'
import { SmallTextBold } from '/Users/martegleditsch/LoveCalculator/app/components/index'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'
import { arrow } from '/Users/martegleditsch/LoveCalculator/app/config/images'

type Props = {
  onPress: () => void
  text: string
  style?: StyleProp<ViewStyle>
}

function NavigationButton(props: Props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <SmallTextBold style={styles.text}>{props.text}</SmallTextBold>
      <Image source={arrow} style={{ width: 16, marginLeft: 6 }} resizeMode='contain' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.darkPink,
  },
})

export default NavigationButton
