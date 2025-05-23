import LoginBackground from '@/components/LoginBackground';
import * as Clipboard from 'expo-clipboard';
import { router } from 'expo-router';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignupLastcodeScreen() {
  const generateRandomCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters =
      letters.charAt(Math.floor(Math.random() * letters.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumber = String(Math.floor(Math.random() * 100)).padStart(
      2,
      '0'
    );
    return `2025-${randomLetters}-${randomNumber}`;
  };

  const code = generateRandomCode();

  const handleNext = () => {
    // 홈으로 이동
    alert('홈으로 이동합니다');
    router.push('/family_main');
  };

  const share = () => {
    alert('코드를 전송하였습니다');
    // 공유하기 버튼 누르면
  };

  const handlePrev = () => {
    router.back();
  };

  const handleCopy = () => {
    Clipboard.setStringAsync(code);
    alert('복사되었습니다!');
  };

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('@/assets/images/smile_panda.png')}
          style={styles.panda}
        />

        <Text style={styles.title}>DO,IT</Text>
        <Text style={styles.description}>
          <Text style={{ fontWeight: 'bold' }}>DO,IT</Text>과 함께 해주셔서
          감사합니다.
          {'\n'}건강한 하루를 위해 노력하겠습니다.
        </Text>

        <View style={styles.codeBox}>
          <Text style={styles.codeText}>{code}</Text>
        </View>

        <TouchableOpacity onPress={handleCopy}>
          <Text style={styles.copyText}>복사하기</Text>
        </TouchableOpacity>

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

        <View style={styles.pagination} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>내 아이에게 코드 보내기</Text>
          <TouchableOpacity onPress={share}>
            <Text style={styles.share}>공유하기</Text>
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
    width: 180,
    height: 180,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#D8B4F8',
    marginBottom: 40,

    textShadowColor: '#bab1c4',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 16,
    color: '#2E0854',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
    fontWeight: '500',
  },
  codeBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  codeText: {
    fontSize: 13,
    color: '#999',
    fontWeight: 500,
    textAlign: 'center',
  },
  copyText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 30,
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
    fontSize: 13,
    color: '#737373',
    marginRight: 10,
  },
  share: {
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
