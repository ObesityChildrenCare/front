import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ChildInfoScreen() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace('/family_main')} accessibilityRole="button">
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
            <View style={styles.infoRow}>
              <Text style={styles.label}>성별</Text>
              <Text style={styles.value}>여</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>나이</Text>
              <Text style={styles.value}>만 11세</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>신장</Text>
              <Text style={styles.value}>140 (cm)</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>몸무게</Text>
              <Text style={styles.value}>30 (kg)</Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnText}>수정하기</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 행동 습관 요약 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            내 아이 <Text style={{ color: '#7A4EF6' }}>행동습관</Text> 요약
          </Text>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryText}>
              김민서님은 현재 (또래 기준) 활동량이 <Text style={styles.bold}>부족한</Text> 상태입니다.
            </Text>
          </View>
        </View>

        {/* 식사 모니터링 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>식사 모니터링</Text>
          <View style={styles.monitoringRequestBox}>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>‘민서’에게 식사 기록 요청 보내기</Text>
            </View>
            <TouchableOpacity
              style={styles.sendBtn}
              onPress={() => setShowPopup(true)}
              accessibilityRole="button"
            >
              <Text style={styles.sendBtnText}>→</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 팝업 */}
        {showPopup && (
          <View style={styles.overlay}>
            <View style={styles.popup}>
              <Image
                source={require('@/assets/images/surprised_panda.png')}
                style={styles.popupImage}
              />
              <Text style={styles.popupText}>
                <Text style={styles.popupBold}>민서</Text> 의 식사 기록이 도착했어요!
              </Text>
              <TouchableOpacity
                style={styles.popupButton}
                onPress={() => {
                  setShowPopup(false);
                  router.replace('/parent_main_unlocked');
                }}
              >
                <Text style={styles.popupButtonText}>▶ 식사 모니터링 결과 확인하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* kcal 계산 및 영양소 모니터링 */}
        <View style={styles.monitoringBox}>
          <Text style={styles.kcalLabel}>kcal 계산</Text>
          <View style={styles.kcalOuterBox}>
            <View style={styles.kcalRow}>
              <Text style={[styles.kcalText, { marginTop: 10 }]}>내 아이의 열량</Text>
              <View style={[styles.kcalBarBackground, { marginTop: 10 }]}> 
                <View style={styles.kcalBarChild} />
              </View>
            </View>
            <View style={styles.kcalRow}>
              <Text style={styles.kcalText}>권장 섭취 열량</Text>
              <View style={styles.kcalBarBackground}>
                <View style={styles.kcalBarRecommended} />
              </View>
            </View>
          </View>
          <Text style={styles.monitoringTitle}>영양소 모니터링</Text>
          <View style={styles.nutrientTextBoxes}>
            <View style={[styles.nutrientBox, { backgroundColor: '#ACD3AB' }]}> 
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

        {/* 더보기 버튼 */}
        <TouchableOpacity style={styles.moreBtn}>
          <Text style={styles.moreBtnText}>더보기</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  popup: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
  },
  popupImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  popupText: {
    fontSize: 17,
    color: '#3A2C4F',
    marginBottom: 24,
    textAlign: 'center',
  },
  popupBold: {
    fontWeight: 'bold',
    color: '#3A2C4F',
  },
  popupButton: {
    backgroundColor: '#EFEFFF',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  popupButtonText: {
    fontSize: 14,
    color: '#3A2C4F',
  },
  container: {
    flex: 1,
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
    marginBottom: 20,
  },
  infoRow: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#3A2C4F',
  },
  value: {
    marginLeft: 15,
    flex: 2,
    fontSize: 16,
    color: '#3A2C4F',
    textAlign: 'left',
  },
  editBtn: {
    marginLeft: 5,
    marginTop: 25,
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: 80,
    alignItems: 'center',
    backgroundColor: '#B8A5C9',
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  editBtnText: {
    color: '#fff',
    fontSize: 12,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A2C4F',
    marginBottom: 8,
  },
  summaryBox: {
    backgroundColor: '#EDEDFC',
    padding: 14,
    borderRadius: 12,
  },
  summaryText: {
    fontSize: 16,
    color: '#3A2C4F',
  },
  bold: {
    fontWeight: 'bold',
  },
  monitoringRequestBox: {
    backgroundColor: '#EDEDFC',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 16,
  },
  inputBox: {
    height: 36,
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  inputText: {
    fontSize: 15,
    color: '#3A2C4F',
  },
  sendBtn: {
    width: 36,
    height: 36,
    backgroundColor: '#7A6397',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: -2,
  },
  monitoringBox: {
    marginTop: 20,
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
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  kcalBarChild: {
    height: 10,
    backgroundColor: '#D8B4F8',
    borderRadius: 10,
    width: '70%',
  },
  kcalBarRecommended: {
    height: 10,
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
    width: '90%',
  },
  monitoringTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#3A2C4F',
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
  moreBtn: {
    marginTop: 16,
    backgroundColor: '#826B98',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  moreBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});