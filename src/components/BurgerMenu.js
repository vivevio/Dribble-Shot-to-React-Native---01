import React from 'react'
import Svg, { Rect } from 'react-native-svg'

const BurgerMenu = props => (
  <Svg width={18} height={9} fill="none" {...props}>
    <Rect y={7} width={18} height={2} rx={1} fill="#14132A" />
    <Rect width={18} height={2} rx={1} fill="#14132A" />
  </Svg>
)

export default BurgerMenu
