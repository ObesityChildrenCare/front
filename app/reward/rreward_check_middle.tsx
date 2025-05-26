import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RRewardCheckMiddle() {
  const goBack = () => {
    router.replace('/reward/rprogress_map');
  };

  const goToBambooBank = () => {
    router.push('/bamboo_bank');
  };

  const goToReceiveGift = () => {
    router.push('/reward/rreward_check_gift')
  };

  const goToRewardCheck = () => {
    router.push('/reward/rreward_check')
  };

  return (
    <LoginBackground>
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
          <Image source={require('@/assets/images/head_panda.png')} style={styles.pandaIcon} />
          <View style={styles.textBox}>
            <Text style={styles.infoText}>와, 대단해! 벌써 이만큼 모았어!</Text>
          </View>
        </View>

        {/* 퍼즐판 (유지) */}
        <View style={styles.puzzleBoard}>
          <Image source={require('@/assets/images/yellow_star_big.png')} style={styles.starIcon} />
          {/*<View style={styles.puzzleBoardOver}></View>*/}
        </View>

        {/* 여기부터 수정 시작 (하단 텍스트 및 버튼 추가) */}
        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            <Text style={styles.bold}>선물</Text>이 도착했어!{'\n'}바로 받을까?{'\n'}아니면 퍼즐을 계속 모을까?
          </Text>

          <View style={styles.buttonRowCustom}> 
            <TouchableOpacity style={styles.buttonDisabled} onPress={goToReceiveGift}>
              <Text style={styles.buttonDisabledText}>바로 받을래</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonActive} onPress={goToRewardCheck}>
              <Text style={styles.buttonActiveText}>계속 모을거야</Text>
            </TouchableOpacity>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0E9FF',
    padding: 10,
    borderRadius: 80,
    marginTop: 20,
    marginBottom: 20,
  },
  pandaIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 80,
    width: 250,
    height: 40,
    marginLeft: 10,
  },
  infoText: {
    color: '#4B0082',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 40,
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
  /*
    puzzleBoardOver: {
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
  }, */
  puzzlePiece: {
    width: '45%',
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // 수정: 개별 위치 지정
  },
  puzzle1: { // pink
    top: 0,
    left: 70,
    width: 150,
    height: 150,
  },
  puzzle2: { // pale
    top: 12,
    left: 10,
  },
  puzzle3: { // green
    top: 80,
    left: 0,
    width: 150,
    height: 150,
  },
  puzzle4: { // purple
    bottom: 10,
    left: 0,
    width: 150,
    height: 150,
  },
  puzzleImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  starIcon: {
    width: 229,
    height: 225,
    resizeMode: 'contain',
    position: 'absolute',   
    top: 50,                
    left: 60,               
  },
  bold: {
    fontWeight: 'bold',
  },

  rewardContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  rewardText: {
    fontSize: 16,
    color: '#4B0082',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonRowCustom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#E5E7EB',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    opacity: 0.7,
  },
  buttonDisabledText: {
    color: '#9CA3AF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonActive: {
    backgroundColor: '#E0D8F8',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
  buttonActiveText: {
    color: '#6B21A8',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
