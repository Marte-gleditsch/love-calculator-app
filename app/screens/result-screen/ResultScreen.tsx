import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { getMatchResult } from '/Users/martegleditsch/LoveCalculator/app/db/match-results'
import {
  SmallText,
  LargeTextBold,
  NavigationButton,
  Logo,
  Blob,
} from '/Users/martegleditsch/LoveCalculator/app/components/index'
import { LoveCalculatorResponse } from '/Users/martegleditsch/LoveCalculator/app/api/index'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

type Props = {
  navigation: NavigationProp<any>
}

function ResultScreen(props: Props) {
  const [result, setResult] = useState<LoveCalculatorResponse>()
  const [barometerWidth, setBarometerWidth] = useState<number>(0)
  const animation = useRef(new Animated.Value(0)).current

  const animatedValue = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, barometerWidth],
  })

  useEffect(() => {
    getMatchResultFromCache()
  }, [])

  useEffect(() => {
    Animated.timing(animation, {
      easing: Easing.out(Easing.ease),
      duration: 1000,
      toValue: 1,
      delay: 700,
      useNativeDriver: false,
    }).start()
  }, [result, animation])

  async function getMatchResultFromCache() {
    const response = await getMatchResult()

    if (response) {
      setResult(response)
      setBarometerWidth((parseInt(response.percentage) * 250) / 100)
    }
  }

  if (!result) return null

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 24, marginTop: 48 }}>
      <Logo />

      <Blob size={800} color={colors.darkPink} style={styles.blob1} />
      <Blob size={800} color={colors.orange} style={styles.blob2} />

      <View style={{ alignItems: 'center', zIndex: 3 }}>
        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.barometerOutline} />
          <Animated.View style={[styles.barometerContent, { width: animatedValue }]} />
        </View>

        <LargeTextBold style={{ color: colors.white }}>{result.percentage + '% match'}</LargeTextBold>
        <SmallText style={{ color: colors.white }}>{result.result}</SmallText>
      </View>

      <NavigationButton onPress={() => props.navigation.navigate('Input')} text={'New match'} />
    </View>
  )
}

const styles = StyleSheet.create({
  blob1: {
    position: 'absolute',
    left: -120,
    opacity: 0.9,
    top: -50,
  },
  blob2: {
    opacity: 0.8,
    position: 'absolute',
    top: -50,
    left: -100,
    zIndex: 2,
    transform: [{ rotate: '-50deg' }],
  },
  barometerOutline: {
    width: 250,
    height: 30,
    borderColor: colors.white,
    borderWidth: 2,
    marginBottom: 12,
    borderRadius: 4,
  },
  barometerContent: {
    height: 30,
    backgroundColor: colors.white,
    position: 'absolute',
    zIndex: 4,
    borderRadius: 4,
  },
})

export default ResultScreen
