/*

   사진을 어떻게 불러올건지, 찍을건지, 없는지 선택하는 창

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
import BackButton from '@/components/BackButton';

export default function InputFood2() {

    const [selected, setSelected] = useState<'gal' | 'photo' | 'none' |null>(null);
    
    const handleSelect = (option: 'gal' | 'photo' | 'none' ) => {
        setSelected(option);
    }
    // 이전 버튼 함수
    const handleBefore = () => {
        router.back();
    }
    // 다음 버튼 함수
    const handleNext = () => {
        router.push('/input-food/input-food_3')
    }

    return (
        <LoginBackground>

            { /* 뒤로가기 버튼 */}
            <BackButton />      

            <SafeAreaView style={styles.container}>

                <View style={styles.pandaWrapper}>
                    {/* 연필 */}
                    <Image source={require('@/assets/images/pencil.png')} style={styles.pencil} />

                    {/* 판다 */}
                    <Image source={require('@/assets/images/smile_panda.png')} style={styles.panda} />
                </View>

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    맛있겠다~
                </Text>
                <Text style={styles.normalText}>
                    그럼 우리 오늘 먹은걸{'\n'}기록해보자!
                </Text>

                

                {/* 갤러리에서 찾을래 */}
                <TouchableOpacity
                    onPress={() => handleSelect('gal')}
                    style={[
                        styles.selectBox,
                        selected === 'gal' && styles.selectBoxSelected,  //선택 됐으면 글로우 효과
                        { opacity: selected !== 'gal' && selected !== null ? 0.3 : 1 },      //선택 안 됐으면 투명하게
                    ]}
                >

                    <Text style={styles.selectBoxText}>갤러리에서 찾을래</Text>

                </TouchableOpacity>

                

                {/* 지금 찍어서 보여줄게 */}
                <TouchableOpacity
                    onPress={() => handleSelect('photo')}
                    style={[
                        styles.selectBox,
                        selected === 'photo' && styles.selectBoxSelected,
                        { backgroundColor: 'rgba(216, 180, 248, 0.37)' },
                        { opacity: selected !== 'photo' && selected !== null ? 0.3 : 1 },
                    ]}
                >

                    <Text style={styles.selectBoxText}>지금 찍어서 보여줄게</Text>

                </TouchableOpacity>

                

                {/* 사진이 없어 */}
                <TouchableOpacity
                    onPress={() => handleSelect('none')}
                    style={[
                        styles.selectBox,
                        selected === 'none' && styles.selectBoxSelected,
                        { backgroundColor: '#FFFFFF' },
                        { opacity: selected !== 'none' && selected !== null ? 0.3 : 1 },
                    ]}
                >

                    <Text style={styles.selectBoxText}>사진이 없어...</Text>

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

    pencil: {
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
        marginBottom: 35,
        marginTop: 0,
        fontWeight: 'bold',
    },

    selectBox: {
        width: '80%',
        height: 45,
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