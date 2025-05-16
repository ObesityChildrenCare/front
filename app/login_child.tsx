import { useState } from 'react';
import {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>🐼</Text>
      <Text style={styles.title}>DO,IT</Text>

      <Text style={styles.content}>가족만의 비밀 암호를 알려주세요!</Text>

      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input as StyleProp<TextStyle>}
        placeholder="비밀번호를 입력하세요."
        placeholderTextColor="#999"
        secureTextEntry
        onSubmitEditing={handleLogin}
      />

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
  );
}

// ✅ 타입 생략하고 스타일만 작성 (TypeScript 에러 방지)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 8,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  content: {
    width: '80%',
    height: 35,
    color: '#000',
    textAlign: 'center',
    fontSize: 13,
  },
  input: {
    width: '80%',
    height: 35,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    marginBottom: 16,
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  switchLabel: {
    marginRight: 12,
    fontSize: 14,
  },
  divider: {
    width: '85%',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    marginVertical: 20,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    marginRight: 5,
  },
  signup: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
