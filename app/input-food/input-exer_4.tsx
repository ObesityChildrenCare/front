/*

   사진을 어떻게 불러올건지, 찍을건지, 없는지 선택하는 창

*/
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import LoginBackground from '@/components/LoginBackground';

export default function InputExer4() {

    const [selected, setSelected] = useState<'yes' | 'no' |null>(null);
    
    const handleSelect = (option: 'yes' | 'no' ) => {
        setSelected(option);
    }

    // 파라미터 전달받기
    const params = useLocalSearchParams();
    const exerCount = params.exerCount ? parseInt(params.exerCount as string, 10) : 0;

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
                    {/* 돋보기 */}
                    <Image source={require('@/assets/images/readingglasses.png')} style={styles.pencil} />

                    {/* 판다 */}
                    <Image source={require('@/assets/images/smile_panda.png')} style={styles.panda} />
                </View>

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    좋아!
                </Text>
                <Text style={styles.normalText}>
                    오늘의 운동은 바로,
                </Text>
                <Text style={styles.exerBox}>
                    <Text style={styles.normalText}>배구</Text>
                </Text>

                <Text style={styles.normalText}>
                    <Text style={{ fontSize: 45 }}>{exerCount}</Text> (분)
                </Text>

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
        marginBottom: 80,
        marginTop: 0,
        fontWeight: 'bold',
    },
    smallText: {
        fontSize: 16,
        color: "rgba(46, 8, 84, 0.42)",
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 0,
    },
    exerBox: {
        width: "80%",
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 11,
        marginBottom: 10,
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
        backgroundColor: 'rgba(216, 180, 248, 0.46)',
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
        color: 'rgba(46, 8, 84, 1)',
        fontWeight: "bold",
        lineHeight: 26,
    },
});