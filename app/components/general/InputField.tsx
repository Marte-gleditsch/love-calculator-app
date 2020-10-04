import React, { useRef, useEffect } from 'react'
import { TextInput, StyleSheet, StyleProp, ViewStyle, Animated, Easing } from 'react-native'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

type Props = {
  autoFocus: boolean
  placeholder: string
  value: string
  onTextChange: (text: string) => void
  style?: StyleProp<ViewStyle>
  index: number
}

function InputField(props: Props) {
  const scaleValue = useRef(new Animated.Value(0)).current
  const translateYValue = useRef(new Animated.Value(0)).current
  const animatedOpacityValue = useRef(new Animated.Value(0)).current

  const animatedScaleValue = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 1],
  })

  const animatedTranslateYValue = translateYValue.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  })

  const delayBetweenItems = 100

  useEffect(() => {
    Animated.sequence([
      Animated.delay(props.index * delayBetweenItems),
      Animated.parallel([
        Animated.timing(animatedOpacityValue, {
          easing: Easing.out(Easing.ease),
          duration: 300,
          delay: 300,
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          easing: Easing.out(Easing.ease),
          duration: 200,
          delay: 300,
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(translateYValue, {
          easing: Easing.out(Easing.ease),
          duration: 200,
          delay: 300,
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start()
  })

  return (
    <Animated.View
      style={[
        styles.container,
        props.style,
        {
          opacity: animatedOpacityValue,
          transform: [{ scale: animatedScaleValue }, { translateY: animatedTranslateYValue }],
        },
      ]}
    >
      <TextInput
        autoCapitalize={'words'}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onTextChange}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
    width: '100%',
    paddingVertical: 12,
  },
})
export default InputField
