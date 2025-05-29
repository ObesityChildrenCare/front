/*
    [ 2 / 4 ]
    부모 인증을 완료하고 나면 아이에게 식사 기록 요청을 보내는 칸 !
*/
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ParentSummary() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((prev) => {
      const newValue = prev;
      if (newValue) {
        router.replace('/family_main');
      }
      return newValue;
    });
  };

  const handleHome = () => {
    router.replace('/family_main');
  };

  return (
    <LoginBackground>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleHome}>
          <Image
            source={require('@/assets/images/blackhouse_icon.png')}
            style={styles.houseicon}
          />
        </TouchableOpacity>
        <Switch
          trackColor={{ false: '#ccc', true: '#D8B4F8' }}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableWithoutFeedback>
            <View style={{ flex: 1, width: '100%' }}>
              <View style={styles.profileCard}>
                <View style={styles.profileImageBox}>
                  <Image
                    source={require('@/assets/images/surprised_panda_big.png')}
                    style={styles.profileImage}
                  />
                </View>

                <View style={styles.profileInfo}>
                  <Text style={styles.nameText}>
                    김 민서 <Text style={styles.suffixText}>(님)</Text>
                  </Text>

                  <Text style={styles.infoText}>
                    <Text
                      style={{
                        color: 'rgba(255, 104, 104, 1)',
                        fontWeight: 'bold',
                      }}
                    >
                      당류
                    </Text>
                    <Text>가 계속 권장 섭취량을 </Text>
                    <Text
                      style={{
                        color: 'rgba(255, 104, 104, 1)',
                        fontWeight: 'bold',
                      }}
                    >
                      초과
                    </Text>
                    <Text>하고 있어요.{'\n'}반면, </Text>
                    <Text
                      style={{
                        color: 'rgba(255, 208, 96, 1)',
                        fontWeight: 'bold',
                      }}
                    >
                      단백질
                    </Text>
                    <Text> 섭취량은 </Text>
                    <Text
                      style={{
                        color: 'rgba(255, 208, 96, 1)',
                        fontWeight: 'bold',
                      }}
                    >
                      부족
                    </Text>
                    <Text>해요.</Text>
                  </Text>
                </View>
              </View>

              <View style={styles.kcalBox}>
                <Text style={styles.kcalTitle}>kcal 계산</Text>

                <View style={styles.progressWrapper}>
                  <View style={styles.progressRow}>
                    <Text style={styles.progressLabel}>내 아이의 열량</Text>
                    <View style={[styles.progressBar, { width: '60%' }]} />
                  </View>

                  <View style={styles.progressRow}>
                    <Text style={styles.progressLabel}>권장 섭취 열량</Text>
                    <View
                      style={[
                        styles.progressBar,
                        { width: '40%', backgroundColor: '#E2D9F3' },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.nutrientButtonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.nutrientButton,
                      { backgroundColor: '#B5E3C1' },
                    ]}
                  >
                    <Text style={styles.nutrientText}>칼슘</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.nutrientButton,
                      { backgroundColor: '#F5D779' },
                    ]}
                  >
                    <Text style={styles.nutrientText}>단백질</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.nutrientButton,
                      { backgroundColor: '#E7C6F5' },
                    ]}
                  >
                    <Text style={styles.nutrientText}>당류</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={styles.kcalTitle}>영양소 분석</Text>

              <View style={styles.kcalBox}>
                <View style={styles.nutrientRow}>
                  <Text style={styles.nutrientLabel}>칼슘</Text>
                  <View style={styles.nutrientBarWrapper}>
                    <View
                      style={[
                        styles.nutrientBarFill,
                        { width: '70%', backgroundColor: '#88CE91' },
                      ]}
                    />
                  </View>
                </View>

                <View style={styles.nutrientRow}>
                  <Text style={styles.nutrientLabel}>단백질</Text>
                  <View style={styles.nutrientBarWrapper}>
                    <View
                      style={[
                        styles.nutrientBarFill,
                        { width: '60%', backgroundColor: '#F5D779' },
                      ]}
                    />
                  </View>
                </View>

                <View style={styles.nutrientRow}>
                  <Text style={styles.nutrientLabel}>당류</Text>
                  <View style={styles.nutrientBarWrapper}>
                    <View
                      style={[
                        styles.nutrientBarFill,
                        { width: '90%', backgroundColor: '#D6B0F5' },
                      ]}
                    />
                  </View>
                </View>
              </View>
              <Text style={styles.kcalTitle}>BMI 변화</Text>

              <LineChart
                data={{
                  labels: [
                    '5월 1주차',
                    '5월 2주차',
                    '5월 3주차',
                    '5월 4주차',
                    '6월 1주차',
                  ],
                  datasets: [
                    {
                      data: [29, 27.2, 26.1, 25.0, 24.1],
                      color: () => '#C1A6F8',
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 20}
                height={240}
                withShadow={false}
                withInnerLines={false}
                withOuterLines={false}
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={{
                  backgroundGradientFrom: '#EEEAF7',
                  backgroundGradientTo: '#EEEAF7',
                  decimalPlaces: 1,
                  color: () => '#C1A6F8',
                  labelColor: () => 'rgba(186, 174, 198, 1)', // ← 변경된 부분
                  fillShadowGradient: 'transparent',
                  fillShadowGradientOpacity: 0,
                  propsForDots: {
                    r: '5',
                    strokeWidth: '2',
                    stroke: '#C1A6F8',
                    fill: '#C1A6F8',
                  },
                  formatYLabel: (yValue) => {
                    const value = parseInt(yValue);
                    // 원하는 라벨 값만 보여주기
                    const allowed = [28, 26, 24, 22, 20, 18];
                    return allowed.includes(value) ? value.toString() : '';
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 20,
                }}
                segments={5}
                yLabelsOffset={6}
                fromZero={false}
              />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 27,
    marginTop: 50,
  },
  houseicon: {
    width: 29,
    height: 29,
    resizeMode: 'contain',
  },

  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'flex-start',
    marginBottom: 35,
  },
  profileImageBox: {
    width: '45%',
    height: 200,
    backgroundColor: 'rgba(230, 230, 250, 0.55)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  textBox: {
    backgroundColor: 'rgba(230, 230, 250, 0.55)',
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
    alignSelf: 'flex-start',

    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  profileImage: {
    width: 115,
    height: 115,
    resizeMode: 'contain',
  },

  profileInfo: {
    flex: 1,
  },

  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgba(46, 8, 84, 1)',
    marginBottom: 30,
    marginTop: 10,
  },

  suffixText: {
    fontWeight: 'normal',
    fontSize: 16,
    color: 'rgba(46, 8, 84, 1)',
  },

  infoText: {
    fontSize: 16,
    fontWeight: 500,
    color: 'rgba(46, 8, 84, 1)',
    marginBottom: 4,
    lineHeight: 25,
  },

  normalText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'rgba(46, 8, 84, 1)',
  },

  smallText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'rgba(46, 8, 84, 1)',
  },

  editButton: {
    marginTop: 20,
    backgroundColor: 'rgba(46, 8, 84, 0.45)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },

  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  kcalBox: {
    backgroundColor: '#E6E6FA8A',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,

    marginBottom: 40,
    width: '100%',
  },

  kcalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 5,
    color: 'rgba(46, 8, 84, 1)',
  },

  progressWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 20,
  },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
  },

  progressLabel: {
    width: 90,
    fontSize: 11,
    fontWeight: 500,
    color: '#2E0854E0',
    marginRight: 10,
  },

  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C1A6F8',
  },

  nutrientButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },

  nutrientButton: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    alignItems: 'center',
  },

  nutrientText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  nutrientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  nutrientLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(46, 8, 84, 1)',
    width: 60,
    marginRight: 10,
  },

  nutrientBarWrapper: {
    flex: 1,
    height: 16,
    backgroundColor: '#E6E6FAE0',
    borderRadius: 10,
    overflow: 'hidden',
  },

  nutrientBarFill: {
    height: '100%',
    borderRadius: 10,
  },
  bmiBox: {
    backgroundColor: 'rgba(230, 230, 250, 0.55)',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },
});
