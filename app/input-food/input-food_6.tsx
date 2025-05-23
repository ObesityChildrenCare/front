/*

   선물 받는 창

*/
import { router } from 'expo-router';
import React, { useState, useCallback } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    BackHandler
} from 'react-native';

import LoginBackground from '@/components/LoginBackground';

export default function InputFood6() {



    const [selected, setSelected] = useState<'sel1' | 'sel2' | 'sel3' | 'sel4' | null>(null);
    
    const handleSelect = (option: typeof selected) => {
        setSelected(option);
        setTimeout(() => {
            router.replace('/input-food/input-food_7');
        }, 1000);
    };

    // 뒤로가기
    const handleBack = () => {
        router.back();
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
                    {/* 하트 */}
                    <Image source={require('@/assets/images/pinkheart.png')} style={[styles.pinkheart, { transform: [{ scaleX: -1 }] }]} />

                    {/* 판다 */}
                    <Image source={require('@/assets/images/smile_panda.png')} style={styles.panda} />
                </View>

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    도와줘서 고마워 ☺
                </Text>
                <Text style={styles.normalText}>
                    오늘도 기록해준 OO을 위해{'\n'}선물을 준비했어!
                </Text>

                <View style={styles.gridContainer}>
                    <TouchableOpacity onPress={() => handleSelect('sel1')}>
                        <Image
                            source={require('@/assets/images/giftbox1.png')}
                            style={styles.imageBox}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect('sel2')}>
                        <Image
                            source={require('@/assets/images/giftbox2.png')}
                            style={styles.imageBox2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect('sel3')}>
                        <Image
                            source={require('@/assets/images/giftbox2.png')}
                            style={styles.imageBox2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSelect('sel4')}>
                        <Image
                            source={require('@/assets/images/giftbox1.png')}
                            style={styles.imageBox}
                        />
                    </TouchableOpacity>
                </View>

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
    pinkheart: {
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
        marginBottom: 5,
        marginTop: 20,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 22,
        color: "#2E0854",
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 0,
        fontWeight: 'bold',
    },

    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    imageBox: {
        width: 120,
        height: 120,
        borderRadius: 15,
        resizeMode: 'contain',
    },
    imageBox2: {
        width: 110,
        height: 110,
        borderRadius: 15,
        resizeMode: 'contain',
    },
});