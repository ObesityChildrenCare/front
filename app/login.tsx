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

export default function LoginScreen() {
  const [isParent, setIsParent] = useState(false);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>🐼</Text>
      <Text style={styles.title}>DO,IT</Text>

      <TextInput
        value={phone}
        onChangeText={setPhone}
        style={styles.input as StyleProp<TextStyle>}
        placeholder="전화번호를 입력하세요."
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input as StyleProp<TextStyle>}
        placeholder="비밀번호를 입력하세요."
        placeholderTextColor="#999"
        secureTextEntry
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>사용자 본인이 부모인가요?</Text>
        <Switch value={isParent} onValueChange={() => setIsParent(!isParent)} />
      </View>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>처음이신가요? </Text>
        <TouchableOpacity>
          <Text style={styles.signup}>회원가입</Text>
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
  input: {
    width: '80%',
    height: 35,
    padding: 14,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    marginBottom: 16,
    color: '#FF0000',
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
  },
  signup: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
