import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import LoginBackground from '@/components/LoginBackground'; // 그라데이션 배경

export default function InputFoodMain() {
    const handleBack = () => {
        router.replace('/login_child');
    }

    const handleNext = () => {
        router.push("/input-food/input-food_page1")
    }
    return (
        <LoginBackground>
            <SafeAreaView style={styles.container}>
                // 뒤로가기 화살표 버튼
                <TouchableOpacity onPress={handleBack} style={styles.backArrow}>
                    <Text style={styles.backArrow}>{'\u2190'}</Text>
                </TouchableOpacity>

                // 판다이미지
                <Image
                    source={require('@/assets/images/smile_panda.png')}
                    style={styles.panda}
                />

                // 다음 버튼
                <View style={styles.arrowWrapper}>
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
        paddingRight: 40,
        marginBottom: 40,
    },
    arrowButtonLeft: {
        backgroundColor: '#E6E6FA',
        borderRadius: 50,
        width: 83,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    arrowButtonRight: {
        backgroundColor: '#D8B4F8',
        borderRadius: 50,
        width: 83,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    panda: {
        width: 180,
        height: 180,
        marginBottom: 2,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});