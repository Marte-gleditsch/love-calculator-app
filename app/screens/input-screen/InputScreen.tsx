import React, { useState } from 'react'
import { View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { checkForMatch } from '/Users/martegleditsch/LoveCalculator/app/api/index'
import { setMatchResult } from '/Users/martegleditsch/LoveCalculator/app/db/match-results'
import { InputField, NavigationButton, Logo } from '/Users/martegleditsch/LoveCalculator/app/components/index'

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
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 24, marginTop: 48 }}>
      <Logo navigation={props.navigation} />

      <View style={{ width: '100%', paddingHorizontal: 24 }}>
        <InputField
          autoFocus
          placeholder={'First person´s name'}
          onTextChange={(text: string) => setFirstName(text)}
          value={firstName}
          index={0}
        />

        <InputField
          autoFocus={false}
          placeholder={'Second person´s name'}
          onTextChange={(text: string) => setSecondName(text)}
          value={secondName}
          style={{ marginTop: 48 }}
          index={1}
        />
      </View>

      <NavigationButton onPress={onCheckMatchPressed} text={'Check if it`s a match'} />
    </View>
  )
}

export default InputScreen
