// rwork_check_bat
import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function WorkCheckScreen() {
  const goToMission = () => {
    // TODO: 나중에 kids_main로 이동
    router.push('/kids_main');
    console.log('다시 미션하러 갈게! 버튼 눌림');
  };

  const goToBank = () => {
    // TODO: 나중에 rbamboobank.tsx로 이동
    router.push('/bamboo_bank');
    console.log('대나무 아이콘 버튼 눌림');
  };

  const goBack = () => {
    router.replace('/kids_main');
  };

  return (
    <LoginBackground>
      <BackButton />

      <SafeAreaView style={styles.container}>
        {/* 오른쪽 위 작은 대나무 아이콘 */}
        <TouchableOpacity onPress={goToBank} style={styles.minibamboo}>
          <Image
            source={require('@/assets/images/bamboo_icon.png')}
            style={styles.minibamboo}
          />
        </TouchableOpacity>

        {/* 본문 텍스트 */}
        <Text style={styles.title}>
          <Text style={styles.highlight}>박쥐</Text> 친구를 만났군요?
        </Text>

        <Image
          source={require('@/assets/images/bamboo_big.png')}
          style={styles.bamboo}
        />

        <Text style={styles.subtitle}>
          <Text style={styles.highlight}>향긋한 대나무 20개</Text>를{'\n'}선물로
          받았어요!
        </Text>

        {/* 버튼들 */}
        <TouchableOpacity onPress={goToBank} style={styles.disabledButton}>
          <Text style={styles.disabledText}>대나무 은행으로 갈래!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.activeButton} onPress={goToMission}>
          <Text style={styles.activeText}>다시 미션하러 갈게!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LoginBackground>
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
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    color: '#312218',
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
  },
  highlight: {
    color: '#A855F7',
  },
  bamboo: {
    width: 100,
    height: 100,
    fontSize: 26,
    fontWeight: 600,
    marginVertical: 30,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E0854E0',
    textAlign: 'center',
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: '#F3E8FF',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginBottom: 12,
    opacity: 0.7,
  },
  disabledText: {
    color: '#A78BFA',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderWidth: 1,
    borderColor: '#D8B4F8',
    shadowColor: '#D8B4F8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  activeText: {
    color: '#A855F7',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  iconNav: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  minibamboo: {
    position: 'absolute',
    top: 25,
    right: 15,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    zIndex: 5,
  },
});
