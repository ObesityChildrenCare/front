// rreward_check
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RRewardCheck() {
  const goBack = () => {
    router.replace('/rprogress_map');
  };

  const goToBambooBank = () => {
    router.push('/bamboo_bank');
  };

  const goToPuzzleReward = () => {
    router.push('/rmiddle_reward_check');
  };

  const goToFamilyRanking = () => {
    router.push('/family_ranking');
  };

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        {/* 상단 네비게이션 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={require('@/assets/images/prev_key.png')} style={styles.iconNav} />
          </TouchableOpacity>
          {/* 대나무 아이콘 원 안에 배치 */}
          <View style={styles.profile}>
            <TouchableOpacity onPress={goToBambooBank}>
              <Image
                source={require('@/assets/images/bamboo.png')}
                style={styles.bambooIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* 텍스트 블럭 + 판다 */}
        <View style={styles.infoContainer}>
          <View style={styles.pandaCircle}>
            <Image source={require('@/assets/images/surprised_panda.png')} style={styles.pandaIcon} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.infoText}>와, 대단해! 벌써 이만큼 모았어!</Text>
          </View>
        </View>

        {/* 퍼즐판 */}
        <View style={styles.puzzleBoard}>
          <TouchableOpacity style={[styles.puzzlePiece, styles.puzzle1]} onPress={goToPuzzleReward}>
            <Image source={require('@/assets/images/pink_puzzle_piece.png')} style={styles.puzzleImage} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.puzzlePiece, styles.puzzle2]} onPress={goToPuzzleReward}>
            <Image source={require('@/assets/images/pale_puzzle_piece.png')} style={styles.puzzleImage} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.puzzlePiece, styles.puzzle3]} onPress={goToPuzzleReward}>
            <Image source={require('@/assets/images/green_puzzle_piece.png')} style={styles.puzzleImage} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.puzzlePiece, styles.puzzle4]} onPress={goToPuzzleReward}>
            <Image source={require('@/assets/images/purple_puzzle_piece.png')} style={styles.puzzleImage} />
          </TouchableOpacity>
        </View>

        {/* 하단 버튼 */}
        <Text style={styles.bottomTitle}>이제 뭘 하고 싶어?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonBox} disabled>
            {/* router.push('/record') */}
            <Image source={require('@/assets/images/pencil.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox} onPress={goToBambooBank}>
            <Image source={require('@/assets/images/bamboo.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox} onPress={goToFamilyRanking}>
            <Image source={require('@/assets/images/prize.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  iconNav: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  // 수정: 대나무 아이콘을 원 안에 배치
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
  },
  bambooIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0E9FF',
    padding: 10,
    borderRadius: 80,
    marginTop: 20,
    marginBottom: 20,
  },
  infoText: {
    color: '#4B0082',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 40, // 수정: 텍스트를 조금 오른쪽으로 이동
  },
  pandaCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  pandaIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  puzzleBoard: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative', // 수정: 퍼즐 위치 조정을 위해
    borderWidth: 4, // 테두리 두께
    borderColor: '#f1e8f8', // 테두리 색상
  },
  puzzlePiece: {
    width: '45%',
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // 수정: 개별 위치 지정
  },
  puzzle1: {
    top: 0,
    left: 70,
    width: 150,
    height: 150,
  },
  puzzle2: {
    top: 12,
    left: 0,
  },
  puzzle3: {
    bottom: 10,
    left: 10,
  },
  puzzle4: {
    bottom: 10,
    right: 10,
  },
  puzzleImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonBox: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 80,
    width: 250,
    height: 40,
    marginLeft:10,
  },
});
