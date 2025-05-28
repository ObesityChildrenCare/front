/*

   무슨 운동을 했는지 선택하는 창

*/
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';

export default function InputExer2() {
  // 이전 버튼 함수
  const handleBefore = () => {
    router.back();
  };
  // 다음 버튼 함수
  const handleNext = () => {
    if (customExercise.trim()) {
      router.push({
        pathname: '/input-food/input_exer_3',
        params: { exercise: customExercise },
      });
    } else {
      alert('운동 이름을 입력해줘!');
    }
  };

  // 운동 이름 적는 변수
  const [customExercise, setCustomExercise] = useState('');

  return (
    <LoginBackground>
      {/* 뒤로가기 버튼 */}
      <BackButton />

      <SafeAreaView style={styles.container}>
        <View style={styles.pandaWrapper}>
          {/* 돋보기 */}
          <Image
            source={require('@/assets/images/readingglasses.png')}
            style={styles.pencil}
          />

          {/* 판다 */}
          <Image
            source={require('@/assets/images/surprised_panda_big.png')}
            style={styles.panda}
          />
        </View>

        {/* 텍스트 박스 */}
        <Text style={styles.bigText}>여기 없구나?</Text>
        <Text style={styles.normalText}>
          혹시 무슨 운동인지{'\n'}알려줄 수 있어!?
        </Text>

        {/* 운동 이름 적는 칸 */}
        <TextInput
          style={[
            styles.selectBox,
            { backgroundColor: '#FFFFFF', textAlign: 'center', fontSize: 16 },
          ]}
          placeholder="운동 이름을 적어줘!"
          placeholderTextColor="rgba(115, 115, 115, 1)"
          value={customExercise}
          onChangeText={setCustomExercise}
        />

        {/*운동 이름 제출 버튼 */}
        <TouchableOpacity onPress={handleNext} style={[styles.selectBox]}>
          <Text style={styles.selectBoxText}>자, 여기!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 130,
    marginBottom: -10,
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
  },
  arrowWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 60,
  },
  pandaWrapper: {
    position: 'relative',
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },

  panda: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  pencil: {
    position: 'absolute',
    top: -20,
    left: 175,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  bigText: {
    fontSize: 26,
    color: '#2E0854',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 20,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 22,
    color: '#2E0854',
    textAlign: 'center',
    marginBottom: 100,
    marginTop: 0,
    fontWeight: 'bold',
  },

  selectBox: {
    width: '80%',
    height: 45,
    backgroundColor: 'rgba(216, 180, 248, 1)',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginBottom: 20,
  },

  selectBoxSelected: {
    shadowColor: '#D8B4F8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },

  selectBoxText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: 26,
  },
});
