import { useState } from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

import LoginBackground from '@/components/LoginBackground'; // 그라데이션 배경
import { router } from 'expo-router';

export default function LoginScreenChild() {
  const [isParent, setIsParent] = useState(false);
  const [password, setPassword] = useState('');

  const toggleSwitch = () => {
    const next = !isParent;
    setIsParent(next);

    setTimeout(() => {
      router.replace(next ? '/login_parent' : '/login_child');
    }, 0);
  };

  const handleKeyboard = () => {
    Keyboard.dismiss(); // ✅ 키보드 내리기
  };

  const handleLogin = () => {
    if (password.trim().length === 0) {
      alert('비밀번호를 입력해주세요!');
      return;
    }

    // TODO: 실제 로그인 로직
    console.log('로그인 완료!');

    // 예: 로그인 성공 시 홈 탭으로 이동
    // router.replace('/(tabs)');
  };

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('@/assets/images/panda.png')}
          style={styles.panda}
        />
        <Text style={styles.title}>DO,IT</Text>

        <Text style={styles.description}>
          가족만의 <Text style={{ fontWeight: 'bold' }}>비밀 암호</Text>를
          알려주세요
        </Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.inputPw as StyleProp<TextStyle>}
          placeholder="비밀 암호를 입력하면 DO,IT의 문이 열려요!"
          placeholderTextColor="#999"
          secureTextEntry
          onSubmitEditing={handleKeyboard}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>사용자 본인이 부모인가요?</Text>
          <Switch value={isParent} onValueChange={toggleSwitch} />
        </View>

        <View style={styles.divider} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>암호를 모르겠나요? </Text>
          <TouchableOpacity>
            <Text style={styles.signup}>요청하기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LoginBackground>
  );
}

// ✅ 타입 생략하고 스타일만 작성 (TypeScript 에러 방지)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: -10,
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
    fontSize: 14,
    color: '#312218',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputPw: {
    width: '80%',
    height: 40,
    paddingHorizontal: 14,
    borderRadius: 30,
    marginBottom: 40,
    color: '000',
    backgroundColor: '#ffffff',
    fontSize: 13,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#D8B4F8',
    borderRadius: 30,
    width: '80%',
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginTop: 20,
    marginBottom: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 6,
    gap: 60,
  },
  switchLabel: {
    marginRight: 12,
    fontSize: 14,
    color: '#737373',
  },
  divider: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    color: '#737373',
  },
  signup: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#312218',
    marginLeft: 10,
  },
});
