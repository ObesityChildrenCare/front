import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import LoginBackground from '@/components/LoginBackground';

export default function InputFoodMain() {

     const [selected, setSelected] = useState<'meal' | 'snack' | null>(null);
    
    const handleSelect = (option: 'meal' | 'snack') => {
        setSelected(option);
    };

    // 메인화면으로 가기 함수
    const handleBack = () => {
        router.replace('/login_child');  // 메인 화면 구현 되면 거기로 이동
    }

    // 이전 버튼 함수
    const handleBefore = () => {
        router.back();
    }
    // 다음 버튼 함수
    const handleNext = () => {
        //router.push("/input-food/input-food_page1");
    }

    return (
        <LoginBackground>
            <SafeAreaView style={styles.container}>

                { /* 뒤로가기 버튼 */}
                <TouchableOpacity onPress={handleBack} style={styles.backArrow}>
                    <Text style={styles.backArrow}>
                        {'\u2190'}
                    </Text>
                </TouchableOpacity>

                <Image
                    source={require('@/assets/images/heart.png')}
                    style={styles.heart1}
                />
                <Image
                    source={require('@/assets/images/heart.png')}
                    style={styles.heart2}
                />

                { /* 판다 이미지 */}
                <Image
                    source={require('@/assets/images/smile_panda.png')}
                    style={styles.panda}
                />

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    두근두근
                </Text>
                <Text style={styles.normalText}>
                    오늘은 뭐 먹었어?
                </Text>

                

                {/* 밥 */}
                <TouchableOpacity
                    onPress={() => handleSelect('meal')}
                    style={[
                        styles.selectBox,
                        selected === 'meal' && styles.selectBoxSelected,  //선택 됐으면 글로우 효과
                        { opacity: selected === 'snack' ? 0.3 : 1 },      //선택 안 됐으면 투명하게
                    ]}
                >

                    <Text style={styles.selectBoxText}>밥</Text>

                </TouchableOpacity>

                

                {/* 간식 */}
                <TouchableOpacity
                    onPress={() => handleSelect('snack')}
                    style={[
                        styles.selectBox,
                        selected === 'snack' && styles.selectBoxSelected,
                        { backgroundColor: '#FFFFFF' },
                        { opacity: selected === 'meal' ? 0.3 : 1 },
                    ]}
                >

                    <Text style={styles.selectBoxText}>간식</Text>

                </TouchableOpacity>

                

                { /* 다음 버튼 */}
                <View style={styles.arrowWrapper}>
                    <TouchableOpacity onPress={handleBefore} style={styles.arrowButtonLeft}>
                        <Text style={styles.arrow}>{'\u2190'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext} style={styles.arrowButtonRight}>
                        <Text style={styles.arrow}>{'\u2192'}</Text>
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
        marginTop: 10,
        marginBottom: -10,
    },
    backArrow: {
        position: 'absolute',
        top: 25,
        left: 15,
        fontSize: 30,
        zIndex: 1,
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
    arrowButtonLeft: {
        position: 'absolute',
        top: 25,
        left: 30,
        fontSize: 30,
        zIndex: 1,

        backgroundColor: '#E6E6FA',
        borderRadius: 50,
        width: 83,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowButtonRight: {
        position: 'absolute',
        top: 25,
        right: 30,
        fontSize: 30,
        zIndex: 1,

        backgroundColor: '#D8B4F8',
        borderRadius: 50,
        width: 83,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    panda: {
        width: 180,
        height: 180,
        marginBottom: 2,
        resizeMode: 'contain',
    },
    heart1: {
        position: 'absolute',
        top: 150,
        left: 40,
        zIndex: 1,
    },
    heart2: {
        position: 'absolute',
        top: 230,
        right: 35,
        zIndex: 1,
    },
    bigText: {
        fontSize: 26,
        color: "#2E0854",
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 20,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 22,
        color: "#2E0854",
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 0,
        fontWeight: 'bold',
    },

    selectBox: {
        width: '80%',
        height: 45,
        backgroundColor: '#D8B4F8',
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 11,
        marginBottom: 20,
    },

    selectBoxSelected: {
        backgroundColor: '#D8B4F8',
        shadowColor: '#D8B4F8',      // 💡 연보라 glow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        elevation: 10,               // ✅ Android 그림자
    },

    selectBoxText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#2E0854',
        fontWeight: "bold",
    },
});