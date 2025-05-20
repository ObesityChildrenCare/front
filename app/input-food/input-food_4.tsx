/*

   사진을 인식해서 해당 음식을 먹은게 맞는지 물어보는 창

*/
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

export default function InputFood4() {

    const [selected, setSelected] = useState<'yes' | 'no' | null>(null);

    const handleSelect = (option: 'yes' | 'no') => {
        setSelected(option);
    }

    // temp 값
    const foodName = '망고맥주';

    // 받침계산 "(이)잖아?"용
    const hasFinalConsonant = (word: string) => {
        const lastChar = word[word.length - 1];
        const code = lastChar.charCodeAt(0);
        const baseCode = code - 44032;
        const jong = baseCode % 28;
        return jong !== 0;
    };

    const particle = hasFinalConsonant(foodName) ? '이' : '';

    // 뒤로가기
    const handleBack = () => {
        router.back();
    }

    // 이전 버튼 함수
    const handleBefore = () => {
        router.back();
    }
    // 다음 버튼 함수
    const handleNext = () => {
            if (selected === 'yes') {
                router.push('/input-food/input-food_6');
            } else if (selected === 'no') {
                router.push('/input-food/input-food_5');
            } else {
        }
    }

    return (
        <LoginBackground>

            { /* 뒤로가기 버튼 */}
            <TouchableOpacity onPress={handleBack} style={styles.backArrow}>
                <Text style={styles.arrowText}>
                    {'\u2190'}
                </Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.container}>

                <View style={styles.pandaWrapper}>
                    {/* 별 */}
                    <Image source={require('@/assets/images/star.png')} style={styles.star} />

                    {/* 판다 */}
                    <Image source={require('@/assets/images/sup_panda.png')} style={styles.panda} />
                </View>

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    어라?!
                </Text>
                <Text style={styles.normalText}>
                    이건 <Text style={{ fontSize: 23 }}>{foodName}</Text>{particle}잖아?
                </Text>

                
                {/* 응 */}
                <TouchableOpacity
                    onPress={() => handleSelect('yes')}
                    style={[
                        styles.selectBox,
                        selected === 'yes' && styles.selectBoxSelected,  //선택 됐으면 글로우 효과
                        { opacity: selected !== 'yes' && selected !== null ? 0.3 : 1 },      //선택 안 됐으면 투명하게
                    ]}
                >
                    <Text style={styles.selectBoxText}>응</Text>
                </TouchableOpacity>
                {/* 아니야 */}
                <TouchableOpacity
                    onPress={() => handleSelect('no')}
                    style={[
                        styles.selectBox,
                        selected === 'no' && styles.selectBoxSelected,
                        { backgroundColor: '#FFFFFF' },
                        { opacity: selected !== 'no' && selected !== null ? 0.3 : 1 },
                    ]}
                >
                    <Text style={styles.selectBoxText}>아니야</Text>
                </TouchableOpacity>




            </SafeAreaView>

            { /* 다음 버튼 */}
            <View style={styles.fixedButtonContainer}>
                <TouchableOpacity onPress={handleBefore} style={styles.arrowButtonLeft}>
                    <Text style={styles.arrow}>{'\u2190'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext} style={styles.arrowButtonRight}>
                    <Text style={styles.arrow}>{'\u2192'}</Text>
                </TouchableOpacity>
            </View>

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
    backArrow: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    arrowText: {
        fontSize: 30,
        color: '#2E0854',
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
    fixedButtonContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 55,
    },
      
    arrowButtonLeft: {
        backgroundColor: '#E6E6FA',
        borderRadius: 50,
        width: 83,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    arrowButtonRight: {
        backgroundColor: '#D8B4F8',
        borderRadius: 50,
        width: 83,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
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

    star: {
        position: 'absolute',
        top: -20,
        left: 175,
        width: 70,
        height: 70,
        resizeMode: 'contain',
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
        backgroundColor: 'rgba(216, 180, 248, 0.37)',
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
        color: '#2E0854',
        fontWeight: "bold",
        lineHeight: 26,
    },
});