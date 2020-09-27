import React from 'react'
import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

type Props = {
  autoFocus: boolean
  placeholder: string
  value: string
  onTextChange: (text: string) => void
  style?: StyleProp<ViewStyle>
}

function InputField(props: Props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        autoCapitalize={'words'}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onTextChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    width: '100%',
    paddingVertical: 12,
  },
})
export default InputField
