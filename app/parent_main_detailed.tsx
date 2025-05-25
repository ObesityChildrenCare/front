import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function ChildInfoScreen() {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <LoginBackground>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.replace('/parent_main_unlocked')} accessibilityRole="button">
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Switch
              value={isEnabled}
              onValueChange={(value) => {
                setIsEnabled(value);
                if (!value) {
                  router.replace('/family_main');
                }
              }}
              thumbColor="#fff"
              trackColor={{ true: '#CBA8F5' }}
            />
          </View>

          {/* Profile Card */}
          <View style={styles.profileCardWrapper}>
            <View style={styles.avatarBox}>
              <Image
                source={require('@/assets/images/surprised_panda.png')}
                style={styles.avatar}
              />
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.name}>김 민서 (님)</Text>
              <Text style={styles.infoText}>
                <Text style={{ color: '#E65C5C', fontWeight: 'bold' }}>당류</Text>
                가 계속 권장 섭취량을 <Text style={{ fontWeight: 'bold', color: '#E65C5C' }}>초과</Text>하고 있어요.{"\n"}
                반면, <Text style={{ color: '#F3B343', fontWeight: 'bold' }}>단백질</Text> 섭취량은 <Text style={{ fontWeight: 'bold', color: '#F3B343' }}>부족</Text>해요.
              </Text>
            </View>
          </View>

          {/* kcal 계산 */}
          <View style={styles.monitoringBox}>
            <Text style={styles.kcalLabel}>kcal 계산</Text>
            <View style={styles.kcalOuterBox}>
              <View style={styles.kcalRow}>
                <Text style={[styles.kcalText, { marginTop: 10 }]}>내 아이의 열량</Text>
                <View style={[styles.kcalBarBackground, { marginTop: 10 }]}> 
                  <View style={[styles.kcalBarChild, { width: '80%' }]} />
                </View>
              </View>
              <View style={styles.kcalRow}>
                <Text style={styles.kcalText}>권장 섭취 열량</Text>
                <View style={styles.kcalBarBackground}>
                  <View style={[styles.kcalBarRecommended, { width: '90%' }]} />
                </View>
              </View>
            </View>

            <View style={styles.nutrientTextBoxes}>
              <View style={[styles.nutrientBox, { backgroundColor: '#9BCC97' }]}> 
                <Text style={styles.nutrientText}>칼슘</Text>
              </View>
              <View style={[styles.nutrientBox, { backgroundColor: '#FFD060' }]}> 
                <Text style={styles.nutrientText}>단백질</Text>
              </View>
              <View style={[styles.nutrientBox, { backgroundColor: '#D8B4F8' }]}> 
                <Text style={styles.nutrientText}>당류</Text>
              </View>
            </View>
          </View>

          {/* 영양소 분석 */}
          <Text style={styles.sectionTitle}>영양소 분석</Text>
          <View style={styles.analysisBox}>
            {[
              { label: '칼슘', color: '#9BCC97', value: 70 },
              { label: '단백질', color: '#FFD060', value: 60 },
              { label: '당류', color: '#D8B4F8', value: 90 },
            ].map((item, index) => (
              <View key={index} style={styles.analysisRow}>
                <Text style={styles.analysisLabel}>{item.label}</Text>
                <View style={[styles.analysisBarBackground]}> 
                  <View
                    style={[ 
                      styles.analysisBarFill,
                      {
                        backgroundColor: item.color,
                        width: item.value * 2.46,
                      },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>

          {/* BMI 변화 */}
          <Text style={styles.sectionTitle}>BMI 변화</Text>
          <View style={styles.BMIBox}>
            <LineChart
              data={{
                labels: ['5월 1주차', '5월 2주차', '5월 3주차', '5월 4주차', '6월 1주차'],
                datasets: [
                  {
                    data: [28, 26.5, 24.8, 24.5, 23.2],
                    strokeWidth: 2,
                  },
                ],
              }}
              width={screenWidth - 40}
              height={230}
              segments={5}
              chartConfig={{
                backgroundColor: '#EDEDFC',
                backgroundGradientFrom: '#EDEDFC',
                backgroundGradientTo: '#EDEDFC',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(216, 180, 248, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(100, 60, 160, ${opacity})`,
                propsForDots: {
                  r: '4',
                  strokeWidth: '2',
                  stroke: '#D8B4F8',
                },
              }}
              style={{ marginVertical: 8, borderRadius: 16, alignSelf: 'center'}}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 24,
    color: '#3B3B3B',
  },
  profileCardWrapper: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
  },
  avatarBox: {
    width: 145,
    height: 217,
    backgroundColor: '#F0F0FC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  infoBox: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  name: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A2C4F',
    marginBottom: 10,
  },
  infoText:{ 
    marginTop: 30,
    marginLeft: 5,
    fontSize: 16,
    color: '#3A2C4F', 
    marginBottom: 5 
  },
  monitoringBox: {
    backgroundColor: '#EDEDFC',
    padding: 16,
    borderRadius: 12,
  },
  kcalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A2C4F',
    marginBottom: 10,
  },
  kcalOuterBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: 314,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  kcalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  kcalText: {
    marginLeft: 10,
    width: 90,
    fontSize: 13,
    color: '#3A2C4F',
  },
  kcalBarBackground: {
    marginRight: 10,
    flex: 1,
    height: 10,
    backgroundColor: '#fffff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  kcalBarChild: {
    marginRight: 10,
    height: 10,
    backgroundColor: '#D8B4F8',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '70%',
  },
  kcalBarRecommended: {
    marginRight: 10,
    height: 10,
    backgroundColor: '#E6E6FA',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '90%',
  },
  nutrientTextBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  nutrientBox: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 20,
  },
  nutrientText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3A2C4F',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A2C4F',
    marginBottom: 12,
    marginTop: 24,
  },
  analysisBox: {
    backgroundColor: '#EDEDFC',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
  },
  analysisRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  analysisLabel: {
    width: 60,
    fontSize: 16,
    color: '#3A2C4F',
  },
  analysisBarBackground: {
    height: 20,
    width: 246,
    backgroundColor: '#E7E7FA',
    borderRadius: 10,
    marginLeft: 7,
  },
  analysisBarFill: {
    height: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  BMIBox: {
    backgroundColor: '#EDEDFC',
    borderRadius: 12,
    justifyContent: 'center',
  }
});
