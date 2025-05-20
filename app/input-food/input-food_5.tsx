/*

   9가지 제시된 것 중 맞는게 무엇인지 선택하는 창

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

export default function InputFood5() {

    const [selected, setSelected] = useState<'sel1' | 'sel2' | 'sel3' | 'sel4' | 'sel5' | 'sel6' | 'sel7' | 'sel8' | 'sel9' |null>(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSelect = (option: typeof selected) => {
        if (isDisabled) return; // 이미 눌렸으면 무시
        setSelected(option);
        setIsDisabled(true);

        setTimeout(() => {
            router.push('/input-food/input-food_6');
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
                    {/* 판다 */}
                    <Image source={require('@/assets/images/sup_panda.png')} style={styles.panda} />
                </View>

                { /* 텍스트 박스 */}
                <Text style={styles.bigText}>
                    아이쿠, 미안!
                </Text>
                <Text style={styles.normalText}>
                    혹시 너가 뭘 먹었는지{'\n'}다시 알려줄래?
                </Text>

                <View style={styles.gridContainer}>
                    <TouchableOpacity onPress={() => handleSelect('sel1')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel1' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel2')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel2' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel3')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel3' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel4')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel4' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel5')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel5' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel6')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel6' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel7')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel7' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel8')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel8' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSelect('sel9')} disabled={isDisabled} style={[styles.selectBox, selected === 'sel9' && styles.selectBoxSelected]}>
                        <Text style={styles.selectBoxText}>항목 9</Text>
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
    selectBox: {
        width: 80,
        height: 80,
        backgroundColor: '#E6E6FA',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },

    selectBoxSelected: {
        borderWidth: 3, 
        borderColor: 'rgba(46, 8, 84, 0.42)', 
    },

    selectBoxText: {
        textAlign: 'center',
        fontSize: 13,
        color: '#2E0854',
        fontWeight: "bold",
    },
});