import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import NavigationButton from '/Users/martegleditsch/LoveCalculator/app/components/buttons/NavigationButton'
import { getMatchResult } from '/Users/martegleditsch/LoveCalculator/app/db/match-results'
import { SmallText, LargeTextBold } from '/Users/martegleditsch/LoveCalculator/app/components/index'
import { LoveCalculatorResponse } from '/Users/martegleditsch/LoveCalculator/app/api/index'

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
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <LargeTextBold>{result.percentage + '% match'}</LargeTextBold>
      <SmallText>{result.result}</SmallText>
      <NavigationButton onPress={() => props.navigation.navigate('Input')} text={'New match'} />
    </View>
  )
}

export default ResultScreen
