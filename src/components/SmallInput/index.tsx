import React, { useState } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

// Componentes
import { Header } from '../../components/Header'
import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'

export function SmallInput({...rest}: TextInputProps) {
  const [category, setCategory] = useState('')

    // Marca e desmarca a categoria
    function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId)
    }
  
  return (
    <TextInput style={styles.container} {...rest} keyboardType="numeric" />
  )
}