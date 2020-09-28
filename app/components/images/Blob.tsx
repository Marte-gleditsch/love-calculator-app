import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Svg, Path } from 'react-native-svg'

type Props = {
  size: number
  color: string
  style?: StyleProp<ViewStyle>
}

function Blob(props: Props) {
  return (
    <Svg width={props.size} height={props.size} viewBox='0 0 200 200' style={props.style}>
      <Path
        fill={props.color}
        d='M30.8,-40.9C42.6,-33.7,56.9,-28.4,65.9,-17.4C75,-6.4,78.9,10.2,72.7,21.9C66.5,33.5,50.2,40.1,36.4,45.5C22.6,50.9,11.3,55.2,1.2,53.6C-8.9,52,-17.9,44.5,-28.5,38C-39.2,31.6,-51.5,26.1,-58.7,16.2C-65.9,6.2,-68,-8.3,-63.2,-19.8C-58.5,-31.4,-47,-40.1,-35.3,-47.4C-23.7,-54.6,-11.8,-60.4,-1.2,-58.8C9.5,-57.2,18.9,-48.1,30.8,-40.9Z'
        transform='translate(100 100)'
      />
    </Svg>
  )
}

export default Blob
