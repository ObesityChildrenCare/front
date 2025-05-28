/*

   운동을 얼마나 했는지 입력하는 창

*/
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';

export default function InputExer3() {
  //1페이지에서 받은거 다시 넘기기
  const params = useLocalSearchParams();
  const exercise = typeof params.exercise === 'string' ? params.exercise : '';

  // 이전 버튼 함수
  const handleBefore = () => {
    router.back();
  };
  // 다음 버튼 함수
  const handleNext = () => {
    router.push({
      pathname: '/input-food/input-exer_4',
      params: { exerCount: String(exerCount), exercise: exercise },
    });
  };

  const [exerCount, setExerCount] = useState(0);

  const increaseCount = () => {
    setExerCount((prev) => (prev + 5 <= 720 ? prev + 5 : prev));
  };

  const decreaseCount = () => {
    setExerCount((prev) => (prev >= 5 ? prev - 5 : 0));
  };

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
        <Text style={styles.bigText}>고마워!</Text>
        <Text style={styles.normalText}>이제 얼마나 했는지 알려줘</Text>
        <Text style={styles.smallText}>나는 운동을 이만큼 했어!</Text>

        <Text style={styles.normalText}>
          <Text style={{ fontSize: 45 }}>{exerCount}</Text> (분)
        </Text>

        <View style={styles.buttonRow}>
          {/* 플러스 */}
          <TouchableOpacity style={styles.selectBox2} onPress={increaseCount}>
            <Text style={styles.selectBoxText}>+</Text>
          </TouchableOpacity>
          {/* 마이너스 */}
          <TouchableOpacity style={styles.selectBox} onPress={decreaseCount}>
            <Text style={styles.selectBoxText}>-</Text>
          </TouchableOpacity>
        </View>

        {/*운동 시간 제출 버튼 */}
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.selectBox, { width: '80%' }]}
        >
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
    marginBottom: 80,
    marginTop: 0,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 16,
    color: 'rgba(46, 8, 84, 0.42)',
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 0,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  selectBox: {
    width: 83,
    height: 50,
    backgroundColor: 'rgba(216, 180, 248, 1)',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginBottom: 20,
  },
  selectBox2: {
    width: 83,
    height: 50,
    backgroundColor: '#E6E6FA',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginBottom: 20,
  },

  selectBoxText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: 26,
  },
});
