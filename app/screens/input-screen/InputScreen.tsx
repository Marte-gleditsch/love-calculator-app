import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { checkForMatch } from '/Users/martegleditsch/LoveCalculator/app/api/index'
import { setMatchResult } from '/Users/martegleditsch/LoveCalculator/app/db/match-results'
import {
  InputField,
  NavigationButton,
  Logo,
  SmallTextBold,
} from '/Users/martegleditsch/LoveCalculator/app/components/index'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

type Props = {
  navigation: NavigationProp<any>
}

function InputScreen(props: Props) {
  const [firstName, setFirstName] = useState<string>('')
  const [secondName, setSecondName] = useState<string>('')

  const [showInputErrormessage, setShowInputErrorMessage] = useState(false)

  async function onCheckMatchPressed() {
    if (firstName.length > 0 && secondName.length > 0) {
      const result = await checkForMatch(firstName, secondName)
      if (result) {
        setMatchResult(result)
      }
      props.navigation.navigate('Result')
    } else {
      setShowInputErrorMessage(true)
    }
  }

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-between', marginBottom: 24, marginTop: 48 }}>
      <Logo navigation={props.navigation} />

      <View style={{ width: '100%', paddingHorizontal: 24 }}>
        <InputField
          autoFocus
          placeholder={'First person´s name'}
          onTextChange={(text: string) => {
            setShowInputErrorMessage(false)
            setFirstName(text)
          }}
          value={firstName}
          index={0}
        />

        <InputField
          autoFocus={false}
          placeholder={'Second person´s name'}
          onTextChange={(text: string) => {
            setShowInputErrorMessage(false)
            setSecondName(text)
          }}
          value={secondName}
          style={{ marginTop: 48 }}
          index={1}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        {showInputErrormessage && (
          <SmallTextBold style={styles.errorMessage}>
            {'You must enter two names to check if it`s a match!'}
          </SmallTextBold>
        )}
        <NavigationButton onPress={onCheckMatchPressed} text={'Check if it`s a match'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.orange,
    position: 'absolute',
    bottom: 100,
    textAlign: 'center',
    maxWidth: 300,
  },
})

export default InputScreen
