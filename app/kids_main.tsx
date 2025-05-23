import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MainScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  const handleKidsHome = () => {
    // router.replace('/kids_home');
  };

  const handleInputSelect = () => {
    router.push('/input-food/input-select');
  };

  const handleRankHome = () => {
    router.push('/family_ranking');
  };

  const handleBambooBank = () => {
    router.push('/bamboo_bank');
  };

  const handlePrev = () => {
    router.back();
  };

  return (
    <LoginBackground>
      <BackButton />

      <SafeAreaView style={styles.container}>
        {/* 오른쪽 위 작은 대나무 아이콘 */}
        <TouchableOpacity onPress={handleBambooBank} style={styles.minibamboo}>
          <Image source={require('@/assets/images/bamboo_icon.png')} style={styles.minibamboo} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            color: '#2E0854E0',
            fontWeight: '700',
            marginBottom: 10,
            marginTop: 100,
            marginLeft: 22,
          }}
        >
          오늘도 환영해, 민서야!
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/surprised_panda_big.png')}
            style={styles.houseImage}
          />
          <TouchableOpacity style={styles.editButton}></TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>긴급 속보</Text>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.inputBox}>
            <Text style={{ color: '#2E0854', fontSize: 16, fontWeight: '500' }}>
              오늘의 활동왕이 바뀌고 있어!
            </Text>
          </View>
          <TouchableOpacity style={styles.inputArrow}>
            <Text style={{ color: '#fff', fontSize: 18 }}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.collectContainer}>
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>이만큼 모았어요!</Text>
            <Text style={{ color: '#2E0854' }}>+ 더보기</Text>
          </View>

          <View style={styles.barContainer}>
            <View style={styles.barBackground}>
              <View style={styles.barFill} />

              <View style={[styles.marker, { left: '0%' }]} />
              <View style={[styles.marker, { left: '25%' }]} />
              <View style={[styles.marker, { left: '50%' }]} />
              <View style={[styles.marker, { left: '75%' }]} />
              <View style={[styles.marker, { left: '100%' }]} />
              <Image
                style={[styles.barIconPuzzle]}
                source={require('@/assets/images/yellow_puzzle_big.png')}
              />
              <Image
                style={[styles.barIconGift]}
                source={require('@/assets/images/giftbox1.png')}
              />
            </View>
          </View>

          <View style={styles.rewardsRow}>
            <TouchableOpacity style={styles.rewardBox} onPress={handleInputSelect}>
              <Image source={require('@/assets/images/pencil.png')} style={styles.buttonIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rewardBox}>
              <Image
                source={require('@/assets/images/yellow_puzzle_big.png')} style={styles.buttonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rewardBox} onPress={handleRankHome}>
              <Image source={require('@/assets/images/prize.png')} style={styles.buttonIcon} />
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: -10,
  },
  backArrow: {
    position: 'absolute',
    top: 25,
    left: 15,
    fontSize: 30,
    color: '#2E0854',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  headerPrev: {
    width: 40,
    height: 35,
  },
  imageContainer: {
    // 🟣 수정: 버튼 겹치기 위해 absolute 위치 기반 부모 뷰 추가
    position: 'relative',
    marginBottom: 12,
    width: '90%',
    height: 250,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',

    shadowColor: '#868284',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  houseImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
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
    paddingLeft: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginLeft: 5,
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
    backgroundColor: '#E6E6FAB2',
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  barContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    height: 40,
  },
  barBackground: {
    width: '90%',
    height: 5,
    backgroundColor: '#FFF4D2',
    borderRadius: 5,
    justifyContent: 'center',
  },
  barFill: {
    position: 'absolute',
    left: 0,
    width: '50%',
    height: 5,
    backgroundColor: '#FFD700',
    borderRadius: 5,
  },
  barIconPuzzle: {
    position: 'absolute',
    top: -14,
    left: '45%',
    width: 30,
    height: 30,
    resizeMode: 'contain',
    zIndex: 2,
  },
  barIconGift: {
    position: 'absolute',
    top: -15,
    left: '95%',
    width: 30,
    height: 30,
    resizeMode: 'contain',
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
    width: '30%',
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
  buttonIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    zIndex: 2,
  },

  minibamboo: {
    position: 'absolute',
    top: 20,
    right: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    zIndex: 5,
  },
});
