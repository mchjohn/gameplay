import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export function GuildIcon() {
  const uri = 'data:image/png;base64,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'
  
  return (
    <Image
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  )
}