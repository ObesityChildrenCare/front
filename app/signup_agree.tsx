import LoginBackground from '@/components/LoginBackground';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignupAgreeScreen() {
  const { childName } = useLocalSearchParams();
  const [agree, setAgree] = useState<'yes' | 'no' | null>(null);

  const handleNext = () => {
    if (!agree) {
      alert('동의 여부를 선택해주세요.');
      return;
    }

    if (agree == 'no') {
      alert('동의를 하지 않으시면 서비스를 이용하실 수 없습니다.');
      return;
    }
    // 다음 화면으로 이동
    router.push('/signup_chinfo');
  };

  const handlePrev = () => {
    router.back();
  };

  const totalDots = 7;
  const currentIndex = 4; // 현재 활성화된 인덱스

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('@/assets/images/smile_panda.png')}
          style={styles.panda}
        />

        <Text style={styles.title}>DO,IT</Text>
        <Text style={styles.description}>
          {childName}을(를) 위한{' '}
          <Text style={{ fontWeight: 'bold' }}>맞춤형 정보</Text>를 제공하기
          위해
          {'\n'}
          <Text style={{ fontWeight: 'bold' }}>
            성별, 생년월일, 키, 몸무게
          </Text>{' '}
          등의
          {'\n'}개인정보를 사용하고자 합니다.
          {'\n\n'}이 사항에 대해서 동의하시나요?
        </Text>

        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setAgree('yes')}
          >
            <Text style={styles.radioDot}>{agree === 'yes' ? '●' : '○'}</Text>
            <Text style={styles.radioText}>예</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => setAgree('no')}
          >
            <Text style={styles.radioDot}>{agree === 'no' ? '●' : '○'}</Text>
            <Text style={styles.radioText}>아니오</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.arrowWrapper}>
          <TouchableOpacity style={styles.arrowButtonLeft} onPress={handlePrev}>
            <Text style={styles.arrow}>{'\u2190'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.arrowButtonRight}
            onPress={handleNext}
          >
            <Text style={styles.arrow}>{'\u2192'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paginationContainer}>
          {Array.from({ length: totalDots }).map((_, idx) => (
            <Image
              key={idx}
              source={
                idx === currentIndex
                  ? require('@/assets/images/black_dot.png')
                  : require('@/assets/images/white_dot.png')
              }
              style={styles.dot}
            />
          ))}
        </View>

        <View style={styles.pagination} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>계정을 가지고 계신가요? </Text>
          <TouchableOpacity onPress={() => router.replace('/login_child')}>
            <Text style={styles.login}>로그인</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  panda: {
    width: 133,
    height: 129,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#D8B4F8',
    marginBottom: 30,
    textShadowColor: '#bab1c4',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 16,
    color: '#2E0854',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 25,
    fontWeight: '500',
  },
  radioContainer: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 40,
    marginTop: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioDot: {
    fontSize: 16,
    color: '#000',
    marginRight: 6,
  },
  radioText: {
    fontSize: 16,
    color: '#2E0854',
    fontWeight: '500',
  },
  arrowWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  arrowButtonLeft: {
    backgroundColor: '#E6E6FA',
    borderRadius: 50,
    width: 83,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowButtonRight: {
    backgroundColor: '#D8B4F8',
    borderRadius: 50,
    width: 83,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  footerText: {
    fontSize: 12,
    color: '#737373',
  },
  login: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#312218',
  },

  paginationContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },

  dotActive: {
    fontSize: 12,
    color: '#000',
  },
  pagination: {
    width: '80%',
    height: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
