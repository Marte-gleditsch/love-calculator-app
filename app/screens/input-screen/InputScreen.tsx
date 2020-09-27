import React, { useState } from 'react'
import { View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import NavigationButton from '/Users/martegleditsch/LoveCalculator/app/components/buttons/NavigationButton'
import InputField from '/Users/martegleditsch/LoveCalculator/app/components/InputField'

type Props = {
  navigation: NavigationProp<any>
}

function InputScreen(props: Props) {
  const [firstName, setFirstName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')

  return (
    <View style={{ marginHorizontal: 24, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <InputField
        autoFocus
        placeholder={'Person 1'}
        onTextChange={(text: string) => setFirstName(text)}
        value={firstName}
      />

      <InputField
        autoFocus
        placeholder={'Person 2'}
        onTextChange={(text: string) => setSecondName(text)}
        value={secondName}
        style={{ marginTop: 12 }}
      />

      <NavigationButton onPress={() => props.navigation.navigate('Result')} text={'Er det match?'} />
    </View>
  )
}

export default InputScreen
