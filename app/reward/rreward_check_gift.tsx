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

  const goToKidsMain = () => {
    router.replace('/kids_main')
  }; 

  const goToReceiveGift = () => {
    router.replace('/kids_main')   // 선물 받는 버튼인데 선물을 받으려고 화살표를 누르면 어떻게 되는 것인지 피그마에 없어서 임시로 이동 경로 지정
  };

  const goToFamilyRanking = () => {
    router.replace('/family_ranking')
  }

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
          <Image source={require('@/assets/images/giftbox2.png')} style={styles.giftIcon} />
        </View>

        {/* 🎁 퍼즐판 밑 부분 수정 */}
        <View style={styles.inputRowCustom}>
          <View style={styles.inputBoxCustom}>
            <Text style={styles.inputText}>
              선물을 받으려면 <Text style={styles.bold}>화살표</Text>를 눌러줘
            </Text>
          </View>
          <TouchableOpacity style={styles.inputArrowCustom} onPress={goToReceiveGift}>
            <Text style={{ color: '#fff', fontSize: 18 }}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* 여기부터 수정 시작 (하단 텍스트 및 버튼 추가) */}
        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>
            <Text style={styles.bold}>이제 뭘 하고 싶어?</Text>
          </Text>

          <View style={styles.buttonRowCustom}> 
            <TouchableOpacity style={styles.buttonDisabled} onPress={goToFamilyRanking}>
              <Text style={styles.buttonDisabledText}>가족 랭킹 보기!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonActive} onPress={goToKidsMain}>
              <Text style={styles.buttonActiveText}>판다 보러 갈래!</Text>
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
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    padding: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
    borderWidth: 4,
    borderColor: '#f1e8f8',
  },
  giftIcon: {
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
    // 🎯 퍼즐판 밑 부분 추가 스타일
  inputRowCustom: {
    width: '95%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0eaff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    marginLeft: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputBoxCustom: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 13,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputText: {
    color: '#2E0854',
    fontSize: 16,
    fontWeight: '500',
  },
  inputArrowCustom: {
    height: '100%',
    width: 40,
    backgroundColor: '#2E085490',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
