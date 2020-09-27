import { AsyncStorage } from 'react-native'

import { LoveCalculatorResponse } from '/Users/martegleditsch/LoveCalculator/app/api/index'

const MATCH_RESULT_KEY = '@tickerMessages:key'

export const getMatchResult = async (): Promise<LoveCalculatorResponse | undefined> => {
  try {
    const result = await AsyncStorage.getItem(MATCH_RESULT_KEY)

    if (result !== null) return JSON.parse(result)
  } catch (error) {
    console.warn('Failed to get love calculator result with error:', error)
  }
  return undefined
}

export const setMatchResult = async (matchResult: LoveCalculatorResponse) => {
  try {
    await AsyncStorage.setItem(MATCH_RESULT_KEY, JSON.stringify(matchResult))
  } catch (error) {
    console.warn('Failed to set love calculator match result')
  }
}
