import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
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

  useEffect(() => {
    getMatchResultFromCache()
  })

  async function getMatchResultFromCache() {
    const response = await getMatchResult()
    if (response) {
      setResult(response)
    }
  }

  if (!result) return null

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 24, marginTop: 48 }}>
      <Logo />

      <Blob size={800} color={colors.darkPink} style={styles.blob1} />
      <Blob size={800} color={colors.orange} style={styles.blob2} />
      <View style={{ alignItems: 'center', zIndex: 3 }}>
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
})

export default ResultScreen
