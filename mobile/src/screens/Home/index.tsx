import { GameCard, GameCardProps } from '../../components/GameCard';
import { useNavigation } from '@react-navigation/native'
import { Background } from '../../components/Background'
import logoImg from '../../assets/logo-nlw-esports.png'
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, FlatList } from 'react-native';
import { Heading } from '../../components/Heading';
import { useEffect, useState } from 'react';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function hanmdleOpenGame({ id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.100.2:3333/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />
      <Heading 
      title='Encontre seu duo'
      subtitle='Selecione o game que deseja jogar...'
      />
      <FlatList data={games}
      keyExtractor={item => item.id}
      renderItem={({item})=> (
        <GameCard data={item}
        onPress={() => hanmdleOpenGame(item)}
        />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />


    </SafeAreaView>
    </Background>
  );
}