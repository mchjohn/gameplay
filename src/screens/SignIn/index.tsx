import React from 'react'
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native'

// Contexto
import { useAuth } from '../../hooks/auth'

// Meus components
import { ButtonIcon } from '../../components/ButtonIcon'
import { Background } from '../../components/Background'

// Meus estilos
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

// Imagens
import IllustrationImg from '../../assets/illustration.png'

export function SignIn() {

  const { loading, signIn } = useAuth()
  
  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <Background>
      <View style={styles.container}>

        <Image source={IllustrationImg} resizeMode="stretch"
          style={styles.image} />
    
        <View style={styles.content}>
          <Text style={styles.title}>Conecte-se{'\n'}e organize  suas{'\n'}
            jogatinas</Text>
          <Text style={styles.subtitle}>Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos</Text>
            
          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          }
        </View>

      </View>
    </Background>
  )
}