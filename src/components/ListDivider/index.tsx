import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  isCentered?: boolean
}

export function ListDivider({isCentered}: Props) {
  return (
    <View style={[
      styles.container,
      isCentered ? {
        marginVertical: 12, alignSelf: 'flex-end', width: '70%'
      } : { marginTop: 12, marginBottom: 30, }
    ]} />
  )
}