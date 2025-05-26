import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

export default function RankingScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <LoginBackground>
      <BackButton />
      <View style={styles.header}>
        <Switch
          trackColor={{ false: '#ccc', true: '#D8B4F8' }}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/rank_family.png')}
            style={styles.houseImage}
          />
        </View>
        <Text
          style={{
            marginLeft: 85,
            fontSize: 14,
            color: '#2E085499',
            marginBottom: 10,
          }}
        >
          화살표를 눌러 움직여! 신호를 보내보세요.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>지금까지 활동왕은?</Text>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputBox}>
            <Text style={{ color: '#2E0854', fontSize: 15, fontWeight: '500' }}>
              <Text
                style={{ fontWeight: '700', color: '#2E0854', fontSize: 15 }}
              >
                '민서'
              </Text>{' '}
              가 지금 1등으로 움직이고 있어요!
            </Text>
          </View>
        </View>

        <View style={[styles.collectContainer]}>
          <View style={styles.barContainerWinner}>
            <View style={styles.barBackground}>
              <View style={styles.barFillWin} />
              <Image
                style={[styles.barIconPanda]}
                source={require('@/assets/images/surprised_panda_big.png')}
              />
              <Image
                style={[styles.barIconPin]}
                source={require('@/assets/images/yellow_finish_pin.png')}
              />
            </View>
          </View>
          <View style={styles.barContainerRest}>
            <View style={styles.barBackground}>
              <View style={[styles.barFillRest, { width: '30%' }]} />
              <Image
                style={[styles.barIconPanda]}
                source={require('@/assets/images/surprised_panda_big.png')}
              />
              <Image
                style={[styles.barIconPin]}
                source={require('@/assets/images/yellow_finish_pin.png')}
              />
            </View>
          </View>
          <View style={styles.barContainerRest}>
            <View style={styles.barBackground}>
              <View style={[styles.barFillRest, { width: '15%' }]} />
              <Image
                style={[styles.barIconPanda]}
                source={require('@/assets/images/surprised_panda_big.png')}
              />
              <Image
                style={[styles.barIconPin]}
                source={require('@/assets/images/yellow_finish_pin.png')}
              />
            </View>
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
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 30,
  },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 35,
  },
  arrowText: {
    fontSize: 30,
    color: '#2E0854',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingTop: 50,
    marginTop: 30,
  },
  headerPrev: {
    width: 40,
    height: 35,
  },
  imageContainer: {
    // 🟣 수정: 버튼 겹치기 위해 absolute 위치 기반 부모 뷰 추가
    position: 'relative',
    height: 300,
  },
  houseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 12,
  },
  editButton: {
    position: 'absolute', // 🟣 수정: 이미지 위에 겹치기 위해 position absolute 사용
    right: 28,
    bottom: 8,
    width: 88,
    height: 26,
    transform: [{ translateX: -16 }, { translateY: -14 }], // 버튼 크기의 절반만큼 이동
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  section: {
    marginTop: 20,
    marginBottom: 8,
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 17,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
  },
  inputRow: {
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
  inputBox: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
    fontSize: 13,
    borderRadius: 10,
    color: '#000',
    backgroundColor: '#fff',
  },
  inputArrow: {
    height: '100%',
    width: 40,
    backgroundColor: '#2E085490',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
    marginLeft: 8,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  collectContainer: {
    width: '95%',
    height: 240,
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  barContainerWinner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD06080',
    marginBottom: 30,
    borderRadius: 20,
    height: 35,
  },
  barContainerRest: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6FAB2',
    marginBottom: 30,
    borderRadius: 20,
    height: 35,
  },
  barBackground: {
    width: '90%',
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
  },
  barFillWin: {
    position: 'absolute',
    left: 0,
    width: '80%',
    height: 20,
    backgroundColor: '#FFD060',
    borderRadius: 20,
  },
  barFillRest: {
    position: 'absolute',
    left: 0,
    height: 20,
    backgroundColor: '#2E085496',
    borderRadius: 20,
  },
  barIconPanda: {
    width: 55,
    height: 52,
    position: 'absolute',
    top: -18,
    left: '-8%',
    fontSize: 14,
    zIndex: 2,
  },

  barIconPin: {
    width: 30,
    height: 52,
    resizeMode: 'contain',
    position: 'absolute',
    left: '92%',
    top: -18,
    fontSize: 14,
    zIndex: 2,
  },

  marker: {
    position: 'absolute',
    top: -3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FEC107',
    transform: [{ translateX: -5 }],
    zIndex: 2,
  },
  rewardsRow: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardBox: {
    width: '48%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    position: 'relative',
  },
});
