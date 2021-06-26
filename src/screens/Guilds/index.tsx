import React from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

// Componentes
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

export function Guilds({handleGuildSelect} : Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: 'image.png',
      owner: true
    },
    {
      id: "2",
      name: "Galera do X1",
      icon: 'image.png',
      owner: true
    },
    {
      id: "3",
      name: "Vamo Trolar",
      icon: 'image.png',
      owner: true
    },
    {
      id: "4",
      name: "Lendários",
      icon: 'image.png',
      owner: true
    },
    {
      id: "5",
      name: "Galera do X1",
      icon: 'image.png',
      owner: true
    },
    {
      id: "6",
      name: "Vamo Trolar",
      icon: 'image.png',
      owner: true
    }
  ]
  
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{paddingBottom: 40, paddingTop: 50}}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  )
}