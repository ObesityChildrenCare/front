import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignupPwScreen() {
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const handleNext = () => {
    if (!pw.trim()) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (!pwCheck.trim()) {
      alert('비밀번호를 확인해주세요.');
      return;
    }

    if (pw !== pwCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 다음 화면으로 이동
    router.push('/signup/signup_chname');
  };

  const handlePrev = () => {
    router.back();
  };

  const totalDots = 7;
  const currentIndex = 2; // 현재 활성화된 인덱스

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('@/assets/images/smile_panda.png')}
          style={styles.panda}
        />

        <Text style={styles.title}>DO,IT</Text>
        <Text style={styles.description}>
          좋아요 !{'\n'} 비밀번호를 입력해주세요
        </Text>

        <TextInput
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor="#999"
          value={pw}
          onChangeText={setPw}
          secureTextEntry={true}
        />

        <TextInput
          style={styles.inputCheck}
          placeholder="비밀번호 확인"
          placeholderTextColor="#999"
          value={pwCheck}
          onChangeText={setPwCheck}
          secureTextEntry={true}
        />

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
    marginTop: 20,
    fontWeight: '500',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 15,
    color: '#000',
  },
  inputCheck: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 60,
    color: '#000',
  },
  arrowWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
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
