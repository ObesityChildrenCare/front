// rreward_check
import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RRewardCheck() {
  const goBack = () => {
    router.replace('/reward/rprogress_map');
  };

  const goToBambooBank = () => {
    router.push('/bamboo_bank');
  };

  const goToPuzzleReward = () => {
    router.push('/reward/rreward_check_middle');
  };

  const goToFamilyRanking = () => {
    router.push('/family_ranking');
  };

  const goToInputFood = () => {
    router.push('/input-food/input-select');
  };

  return (
    <LoginBackground>
      {/* 상단 네비게이션 */}
      <BackButton />

      <TouchableOpacity onPress={goToBambooBank} style={styles.bambooIcon}>
        <Image
          source={require('@/assets/images/bamboo_icon.png')}
          style={styles.bambooIcon}
        />
      </TouchableOpacity>

      <SafeAreaView style={styles.container}>
        {/* 텍스트 블럭 + 판다 */}
        <View style={styles.infoContainer}>
          <Image
            source={require('@/assets/images/head_panda.png')}
            style={styles.pandaIcon}
          />
          <View style={styles.textBox}>
            <Text style={styles.infoText}>와, 대단해! 벌써 이만큼 모았어!</Text>
          </View>
        </View>

        {/* 퍼즐판 */}
        <View style={styles.puzzleBoard}>
          <TouchableOpacity
            style={[styles.puzzlePiece, styles.puzzle1]}
            onPress={goToPuzzleReward}
          >
            <Image
              source={require('@/assets/images/pink_puzzle_piece.png')}
              style={styles.puzzleImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.puzzlePiece, styles.puzzle3]}
            onPress={goToPuzzleReward}
          >
            <Image
              source={require('@/assets/images/green_puzzle_piece.png')}
              style={styles.puzzleImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.puzzlePiece, styles.puzzle2]}
            onPress={goToPuzzleReward}
          >
            <Image
              source={require('@/assets/images/pale_puzzle_piece.png')}
              style={styles.puzzleImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.puzzlePiece, styles.puzzle4]}
            onPress={goToPuzzleReward}
          >
            <Image
              source={require('@/assets/images/purple_puzzle_piece.png')}
              style={styles.puzzleImage}
            />
          </TouchableOpacity>
        </View>

        {/* 하단 버튼 */}
        <Text style={styles.bottomTitle}>이제 뭘 하고 싶어?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonBox} onPress={goToInputFood}>
            {/* router.push('/record') */}
            <Image
              source={require('@/assets/images/pencil.png')}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBox} onPress={goToBambooBank}>
            <Image
              source={require('@/assets/images/bamboo_big.png')}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={goToFamilyRanking}
          >
            <Image
              source={require('@/assets/images/prize.png')}
              style={styles.buttonIcon}
            />
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
    marginTop: 90,
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
    position: 'absolute',
    top: 25,
    right: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    zIndex: 5,
  },

  infoContainer: {
    width: '90%',
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D7D7F0D4',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 80,
    marginTop: 20,
    marginBottom: 50,
  },
  infoText: {
    color: '#4B0082',
    fontSize: 14,
    textAlign: 'center',
  },
  // 디자이너 요구에 맞춰서 수정
  pandaIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  puzzleBoard: {
    width: '90%',
    marginLeft: 20,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 40,
    position: 'relative', // 수정: 퍼즐 위치 조정을 위해
    overflow: 'hidden',
  },
  puzzlePiece: {
    width: 140,
    height: 140,
    aspectRatio: 1,
    borderRadius: 10,
    position: 'absolute', // 수정: 개별 위치 지정
  },
  puzzle1: {
    // pink
    top: -15,
    left: 80,
  },
  puzzle2: {
    // pale
    top: -20,
    left: -24,
  },
  puzzle3: {
    // green
    top: 90,
    left: -15,
  },
  puzzle4: {
    // purple
    bottom: 0,
    left: -15,
  },
  puzzleImage: {
    width: '120%',
    height: '120%',
    resizeMode: 'contain',
  },
  bottomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 20,
    marginLeft: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonBox: {
    width: 90,
    height: 90,
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
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 80,
    width: '85%',
    height: 40,
    marginLeft: 10,
  },
});
