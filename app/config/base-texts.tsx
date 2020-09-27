import { StyleSheet } from 'react-native'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'

const text = {
  defaults: {
    backgroundColor: 'transparent',
    color: colors.black,
  },
  small: {
    fontSize: 16,
    lineHeight: 20,
  },
  large: {
    fontSize: 32,
    lineHeight: 40,
  },
}

export default StyleSheet.create({
  smallText: {
    ...text.defaults,
    ...text.small,
  },
  smallTextBold: {
    ...text.defaults,
    ...text.small,
  },
  largeText: {
    ...text.defaults,
    ...text.large,
  },
  largeTextBold: {
    ...text.defaults,
    ...text.large,
  },
})
