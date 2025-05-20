/*

   이 사진이 맞는지 확인하는 창

*/
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

import LoginBackground from '@/components/LoginBackground';

// 화면 길이
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function InputFood3() {

    const [selected, setSelected] = useState<'yes' | 'no' |null>(null);
    
    const handleSelect = (option: 'yes' | 'no' ) => {
        setSelected(option);
    }



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
            router.push('/input-food/input-food_4');
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

            </SafeAreaView>

            

            <View style={styles.pandaWrapper}>

                {/* 배경 */}
                <View style={styles.background1} />
                <View style={styles.background2} />

                {/* 제출한 사진 */}
                <Image source={require('@/assets/images/TempPicture.jpg')} style={styles.picture} />
                
                {/* 판다 */}
                <Image source={require('@/assets/images/head_panda.png')} style={styles.panda} />

                { /* 텍스트 박스 */}
                <Text style={styles.normalText}>
                    이거 맞아?
                </Text>
            </View>



            
            <View style={styles.selectionContainer}>
                {/* 아니야 */}
                <TouchableOpacity
                    onPress={() => handleSelect('no')}
                    style={[
                        styles.selectBox2,
                        selected === 'no' && styles.selectBoxSelected,
                        { opacity: selected !== 'no' && selected !== null ? 0.3 : 1 },
                    ]}
                >
                    <Text style={styles.selectBoxText}>아니야</Text>
                </TouchableOpacity>
                {/* 맞아 */}
                <TouchableOpacity
                    onPress={() => handleSelect('yes')}
                    style={[
                        styles.selectBox,
                        selected === 'yes' && styles.selectBoxSelected,  //선택 됐으면 글로우 효과
                        { opacity: selected !== 'yes' && selected !== null ? 0.3 : 1 },      //선택 안 됐으면 투명하게
                    ]}
                >
                    <Text style={styles.selectBoxText}>맞아</Text>
                </TouchableOpacity>


            </View>

            
            
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
        position: 'absolute',
        top: 140,
        left: 30,
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 10,      
    },

    panda: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        zIndex: 10,
    },

    background1: {
        position: 'absolute',
        width: screenWidth-60,
        height: 70,
        backgroundColor: 'rgba(215, 215, 240, 0.83)',
        borderRadius: 90,
        top: 0,
        left: 0,
        zIndex: 1,
    },
    background2: {
        position: 'absolute',
        width: screenWidth - 140,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 90,
        top: 10,
        left: 70,
        zIndex: 2,
    },
    picture: {
        position: 'absolute',
        width: screenWidth - 60,
        height: screenHeight - 450,
        borderRadius: 30,
        top: 90,
        left: 0,
        zIndex: 2,
    },

    normalText: {
        fontSize: 18,
        color: '#2E0854',
        fontWeight: 'bold',
        marginLeft: 25,
        zIndex: 10,
      },
    selectionContainer: {
        position: 'absolute',
        bottom: 90,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 55,
    },

    selectBox: {
        width: 83,
        height: 50,
        backgroundColor: 'rgba(216, 180, 248, 0.37)',
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