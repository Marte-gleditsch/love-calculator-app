import React, { useRef, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, StyleProp, ViewStyle, Animated, Easing } from 'react-native'
import SmallTextBold from '/Users/martegleditsch/LoveCalculator/app/components/text/SmallTextBold'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'
import { arrow } from '/Users/martegleditsch/LoveCalculator/app/config/images'

type Props = {
  onPress: () => void
  text: string
  style?: StyleProp<ViewStyle>
}

function NavigationButton(props: Props) {
  const animation = useRef(new Animated.Value(0)).current

  const animatedArrow = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [6, 18, 6],
  })

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        easing: Easing.bounce,
        duration: 1000,
        delay: 3000,
        toValue: 1,
        useNativeDriver: false,
      })
    ).start()
  })

  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <SmallTextBold style={styles.text}>{props.text}</SmallTextBold>
      <Animated.Image source={arrow} style={{ width: 16, marginLeft: animatedArrow }} resizeMode='contain' />
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
