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

export default function SignupChinfoScreen() {
  // 여기부터 시작
  const [gender, setGender] = useState<'boy' | 'girl' | null>(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleNext = () => {
    if (!height.trim() || !weight.trim() || !gender) {
      alert('자녀의 정보를 모두 입력해주세요.');
      return;
    }

    router.push('/signup/signup_price_agree');
  };

  const handlePrev = () => {
    router.back();
  };

  const totalDots = 7;
  const currentIndex = 5; // 현재 활성화된 인덱스

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('@/assets/images/smile_panda.png')}
          style={styles.panda}
        />

        <Text style={styles.title}>DO,IT</Text>
        <Text style={styles.description}>
          거의 다 왔어요!{'\n'}내 아이의 정보를 입력해주세요.
        </Text>

        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender('boy')}
          >
            <Text style={styles.radioCircle}>
              {gender === 'boy' ? '●' : '○'}
            </Text>
            <Text style={styles.radioLabel}>남</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender('girl')}
          >
            <Text style={styles.radioCircle}>
              {gender === 'girl' ? '●' : '○'}
            </Text>
            <Text style={styles.radioLabel}>여</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.measureRow}>
          <Text style={styles.label}>키</Text>
          <TextInput
            style={styles.measureInput}
            placeholder="cm"
            placeholderTextColor="#999"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
        </View>

        {/* 몸무게 입력 */}
        <View style={styles.measureRow}>
          <Text style={styles.label}>몸무게</Text>
          <TextInput
            style={styles.measureInput}
            placeholder="kg"
            placeholderTextColor="#999"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
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
    marginBottom: 25,
    marginTop: 25,
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
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 24,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2E0854',
    marginRight: 6,
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2E0854',
  },
  measureRow: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2E0854',
    width: 50,
    marginRight: 10,
  },
  measureInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 13,
    color: '#000',
  },
  arrowWrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginTop: 40,
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
    marginTop: 10,
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
    marginBottom: 2,
  },
});
