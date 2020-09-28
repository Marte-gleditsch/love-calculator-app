import React, { useState } from 'react'
import { View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { checkForMatch } from '/Users/martegleditsch/LoveCalculator/app/api/index'
import { setMatchResult } from '/Users/martegleditsch/LoveCalculator/app/db/match-results'
import { InputField, NavigationButton } from '/Users/martegleditsch/LoveCalculator/app/components/index'

type Props = {
  navigation: NavigationProp<any>
}

function InputScreen(props: Props) {
  const [firstName, setFirstName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')

  async function onCheckMatchPressed() {
    const result = await checkForMatch(firstName, secondName)
    if (result) {
      setMatchResult(result)
    }
    props.navigation.navigate('Result')
  }

  return (
    <View style={{ marginHorizontal: 24, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <InputField
        autoFocus
        placeholder={'Person 1'}
        onTextChange={(text: string) => setFirstName(text)}
        value={firstName}
      />

      <InputField
        autoFocus={false}
        placeholder={'Person 2'}
        onTextChange={(text: string) => setSecondName(text)}
        value={secondName}
        style={{ marginTop: 12 }}
      />

      <NavigationButton onPress={onCheckMatchPressed} text={'Er det match?'} />
    </View>
  )
}

export default InputScreen
