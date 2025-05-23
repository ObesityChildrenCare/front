import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function MainScreen() {
  const handlePrev = () => {
    router.back();
  };

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerPrev} onPress={handlePrev}>
            <Text style={styles.arrowText}>
              {'\u2190'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 20,
            color: '#2E0854E0',
            fontWeight: '700',
            marginBottom: 10,
            marginLeft: 22,
          }}
        >
          대나무 은행<Text style={{ fontWeight: '500' }}>에 온 걸 환영해</Text>
        </Text>

        <View style={styles.imageContainer}>
          <View style={styles.bambooContainer}>
            <Image
              source={require('@/assets/images/bamboo_big.png')}
              style={styles.houseImage}
            />
          </View>
          <View style={styles.bambooTextContainer}>
            <Text style={{ fontSize: 16, color: '#2E08546B' }}>
              누적 대나무 개수
            </Text>
            <Text
              style={{ fontSize: 50, fontWeight: 'bold', color: '#2E0854' }}
            >
              50 <Text style={{ fontSize: 22 }}>(개)</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.collectButtonContainer}>
          <Text style={{ fontSize: 17, color: '#FFF', fontWeight: 'bold' }}>
            대나무 모으러 가기
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  backArrow: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  arrowText: {
    fontSize: 30,
    color: '#2E0854',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingTop: 35,
  },
  headerPrev: {
    width: 40,
    height: 35,
  },
  bamboo: {
    width: 50,
    height: 50,
    borderRadius: 200,
    paddingHorizontal: 5,
    paddingTop: 3,
    backgroundColor: '#E6E6FA',

    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
  },
  imageContainer: {
    // 🟣 수정: 버튼 겹치기 위해 absolute 위치 기반 부모 뷰 추가
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 12,
    marginTop: 12,
    width: '90%',
    height: 250,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,

    paddingHorizontal: 15,
    paddingVertical: 15,

    shadowColor: '#868284',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bambooContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    width: '45%',
    height: '90%',
    borderRadius: 20,
    backgroundColor: '#E6E6FA8C',
  },
  houseImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  collectButtonContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#2E085499',
    marginHorizontal: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  bambooTextContainer: {
    width: '45%',
    height: '40%',
    marginTop: 90,
  },
});
