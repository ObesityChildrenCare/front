/*

   오늘의 기록 성공! 창

*/
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import BackButton from '@/components/BackButton';
import LoginBackground from '@/components/LoginBackground';

export default function InputFood7() {

    const [selected, setSelected] = useState<'sel1' | 'sel2' | null>(null);

    const handleSelect = (option: 'sel1' | 'sel2') => {
        setSelected(option);
        if (option === 'sel1') {
            router.replace('/kids_main'); // 메인화면
        } else if (option === 'sel2') {
            router.replace('/input-food/input-select'); // 다시정하기
        }
    }
    const handleBambooBank = () => {
        router.push('/bamboo_bank');
    };

    const rewardName = '향긋한 대나무';
    const rewardCount = 10;

    return (
        <LoginBackground>
            { /* 뒤로가기 버튼 */}
            <BackButton onPress={() => router.replace('/kids_main')} />

            {/* 오른쪽 위 작은 대나무 아이콘 */}
            <TouchableOpacity onPress={handleBambooBank}>
                <Image source={require('@/assets/images/bamboo_icon.png')} style={styles.minibamboo} />
            </TouchableOpacity>



            <SafeAreaView style={styles.container}>



                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    오늘의 기록 성공!
                </Text>

                {/* 대나무 */}
                <Image source={require('@/assets/images/bamboo_big.png')} style={styles.bamboo} />

                { /* 텍스트 박스 */}
                <Text style={styles.normalText}>
                    <Text style={{ color: 'rgba(157, 83, 232, 0.88)' }}>{rewardName} {rewardCount}개</Text>를{'\n'}선물로 받았어요!
                </Text>



                {/* 판다 보러가기 */}
                <TouchableOpacity
                    onPress={() => handleSelect('sel1')}
                    style={[
                        styles.selectBox,
                        selected === 'sel1' && styles.selectBoxSelected,  //선택 됐으면 글로우 효과
                        { opacity: selected === 'sel2' ? 0.3 : 1 },      //선택 안 됐으면 투명하게
                    ]}
                >

                    <Text style={styles.selectBoxText}>판다 보러갈래~!</Text>

                </TouchableOpacity>



                {/* 되돌아가기 */}
                <TouchableOpacity
                    onPress={() => handleSelect('sel2')}
                    style={[
                        styles.selectBox,
                        selected === 'sel2' && styles.selectBoxSelected,
                        { backgroundColor: '#FFFFFF' },
                        { opacity: selected === 'sel1' ? 0.3 : 1 },
                    ]}
                >

                    <Text style={styles.selectBoxText}>다른 것도 기록할래!</Text>

                </TouchableOpacity>



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
    minibamboo: {
        position: 'absolute',
        top: 45,
        right: 20,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        zIndex: 5,
    },
    bamboo: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        marginVertical: 30,
    },
    bigText: {
        fontSize: 30,
        color: "#2E0854",
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 10,
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 22,
        color: "#2E0854",
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 0,
        lineHeight: 35,
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