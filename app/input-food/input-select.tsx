/*

   먹은것과 운동중에 무엇을 기록하고 싶은지 선택하는 창

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

export default function InputSelect() {

    const [selected, setSelected] = useState<'food' | 'exercise' | null>(null);
    const handleSelect = (option: 'food' | 'exercise') => {
        setSelected(option);
    };

    // 뒤로가기
    const handleBack = () => {
        router.back();
    }


    // 다음 버튼 함수
    const handleNext = () => {
        if (selected === 'food') {
            router.push('/input-food/input-food_1');
        } else if (selected === 'exercise') {
            router.push('/input-food/input-exer_1');
        } else {
        }
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

                { /* 판다 이미지 */}
                <Image
                    source={require('@/assets/images/smile_panda.png')}
                    style={styles.panda}
                />

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    반가워
                </Text>
                <Text style={styles.normalText}>
                    무엇을 기록하고 싶어?
                </Text>



                {/* 먹방 선택 */}
                <TouchableOpacity
                    onPress={() => handleSelect('food')}
                    style={[
                        styles.selectBox,
                        selected === 'food' && styles.selectBoxSelected, //선택되면 글로우 효과
                        { opacity: selected === 'exercise' ? 0.3 : 1 },  //선택 안 됐으면 투명하게
                    ]}
                >

                    <Text style={styles.selectBoxText}>
                        <Text style={{ fontWeight: 'bold' }}>먹방</Text>을 기록할래
                    </Text>

                </TouchableOpacity>

                {/* 운동 선택 */}
                <TouchableOpacity
                    onPress={() => handleSelect('exercise')}
                    style={[
                        styles.selectBox,
                        selected === 'exercise' && styles.selectBoxSelected,
                        { backgroundColor: 'rgba(115, 153, 234, 0.55)' },
                        { opacity: selected === 'food' ? 0.3 : 1 },
                    ]}
                >

                    <Text style={styles.selectBoxText}>
                        <Text style={{ fontWeight: 'bold' }}>운동</Text>을 기록할래
                    </Text>

                </TouchableOpacity>


            </SafeAreaView>

            { /* 다음 버튼 */}
            <View style={styles.fixedButtonContainer}>
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
    fixedButtonContainer: {
        position: 'absolute',
        bottom: 50,
        right: 55,
        alignItems: 'flex-end',
        width: '100%',
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
    panda: {
        width: 180,
        height: 180,
        marginBottom: 2,
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
        backgroundColor: 'rgba(155, 204, 151, 0.62)',
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