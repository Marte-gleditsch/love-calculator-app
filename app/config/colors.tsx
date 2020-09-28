export type PossibleColors =
  | 'darkPink'
  | 'black'
  | 'orange'
  | 'lightGrey'
  | 'lightPink'
  | 'lightOrange'
  | 'white'
  | 'darkGrey'

export type ColorStyleProps = { [K in PossibleColors]?: boolean }

export const colors: { [K in PossibleColors]: string } = {
  darkPink: '#F37892',
  black: '#2b2b2c',
  orange: '#F7BA92',
  lightGrey: '#E1E3E5',
  darkGrey: '#C6C6C6',
  lightPink: '#F4DCDC',
  lightOrange: '#FAE4D5',
  white: '#fff',
}
