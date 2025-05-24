// rwork_checkfin
import YellowBackground from '@/components/YellowBackground'; // 그라데이션 배경
import { router } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WorkCheckFinScreen() {
  const goBack = () => {
    router.replace('/kids_main');
  };

  const goToPuzzleBoard = () => {
    router.push('/rreward_check');
  };

  return (
    <YellowBackground>
      <SafeAreaView style={styles.container}>
        {/* 상단 뒤로가기 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={require('@/assets/images/prev_key.png')} style={styles.iconNav} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>오늘도 미션 성공!</Text>

        {/* 퍼즐 아이콘 + 배경 카드 */}
        <View style={styles.puzzleCard}>
          <Image
            source={require('@/assets/images/yellow_puzzle_big.png')}
            style={styles.puzzle}
          />
        </View>

        <Text style={styles.subtitle}>
          <Text style={styles.highlight}>퍼즐 조각</Text>이{'\n'}선물로 도착했어요!
        </Text>

        <TouchableOpacity style={styles.puzzleButton} onPress={goToPuzzleBoard}>
          <Text style={styles.puzzleButtonText}>
            <Text style={styles.highlight}>퍼즐판</Text>을 확인해보자!
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </YellowBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 20,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconNav: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082',
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
  },
  puzzleCard: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 24,
  },
  puzzle: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 16,
    color: '#312218',
    textAlign: 'center',
    marginBottom: 30,
  },
  highlight: {
    color: '#FACC15',
    fontWeight: 'bold',
  },
  puzzleButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderWidth: 1,
    borderColor: '#FACC15',
    shadowColor: '#FACC15',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  puzzleButtonText: {
    color: '#4B0082',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
