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
import BackButton from '@/components/BackButton';

export default function InputExer1() {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (label: string) => {
        setSelected(label);

        if (label === '여기 없어') {
            router.push('/input-food/input-exer_2');
        } else {
            router.push({
                pathname: '/input-food/input-exer_3',
                params: { exercise: label },
            });
            console.log('선택한 운동:', label);
        }
    };

    return (
        <LoginBackground>
            {/* 뒤로가기 버튼 */}
            <BackButton />

            <SafeAreaView style={styles.container}>
                <View style={styles.pandaWrapper}>
                    {/* 돋보기 */}
                    <Image source={require('@/assets/images/readingglasses.png')} style={styles.readingglasses} />
                    {/* 판다 */}
                    <Image source={require('@/assets/images/surprised_panda_big.png')} style={styles.panda} />
                </View>

                {/* 텍스트 박스 */}
                <Text style={styles.normalText}>오늘은 어떤 운동을 했어?</Text>

                <View style={styles.gridContainer}>
                    {[
                        '수영',
                        '배구',
                        '배드민턴',
                        '농구',
                        '축구',
                        '피구',
                        '달리기',
                        '자전거',
                        '여기 없어',
                    ].map((label) => (
                        <TouchableOpacity
                            key={label}
                            onPress={() => handleSelect(label)}
                            style={[
                                styles.selectBox,
                                selected === label && styles.selectBoxSelected,
                            ]}
                        >
                            <Text style={styles.selectBoxText}>{label}</Text>
                        </TouchableOpacity>
                    ))}
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
    readingglasses: {
        position: 'absolute',
        top: -20,
        left: 175,
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    normalText: {
        fontSize: 22,
        color: "#2E0854",
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 30,
        fontWeight: 'bold',
    },

    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
        maxWidth: 300,
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