import React, { useState } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

// Componentes
import { Header } from '../Header'
import { Background } from '../Background'
import { CategorySelect } from '../CategorySelect'
import { GuildIcon } from '../GuildIcon'

export function TextArea({...rest}: TextInputProps) {
  return (
    <TextInput style={styles.container} {...rest} keyboardType="numeric" />
  )
}