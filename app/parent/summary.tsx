/*
    [ 2 / 4 ]
    부모 인증을 완료하고 나면 아이에게 식사 기록 요청을 보내는 칸

*/
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function parentSummary() {



    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        setIsEnabled((prev) => {
            const newValue = prev;
            if (newValue) {
                router.replace('/family_main');
            }
            return newValue;
        });
    };

    const handleNext = () => {
        router.push('/parent/detail');
    }

    const handleHome = () => {
        router.replace('/family_main');
    }

    return (
        <LoginBackground>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleHome}>
                    <Image
                        source={require('@/assets/images/blackhouse_icon.png')}
                        style={styles.houseicon}
                    />
                </TouchableOpacity> 
                <Switch
                    trackColor={{ false: '#ccc', true: '#D8B4F8' }}
                    thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']} >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableWithoutFeedback>
                        <View style={{ flex: 1, width: '100%' }}>
                            <View style={styles.profileCard}>
                                <View style={styles.profileImageBox}>
                                    <Image
                                        source={require('@/assets/images/surprised_panda_big.png')}
                                        style={styles.profileImage}
                                    />
                                </View>

                                <View style={styles.profileInfo}>
                                    <Text style={styles.nameText}>김 민서 <Text style={styles.suffixText}>(님)</Text></Text>

                                    <Text style={styles.infoText}>성별  여</Text>
                                    <Text style={styles.infoText}>나이  만 11세</Text>
                                    <Text style={styles.infoText}>신장  140 (cm)</Text>
                                    <Text style={styles.infoText}>몸무게 30 (kg)</Text>

                                    <TouchableOpacity style={styles.editButton}>
                                        <Text style={styles.editButtonText}>수정하기</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={[styles.normalText, { paddingTop: 30 }]}>내 아이
                                <Text style={{ color: 'rgba(115, 153, 234, 1)' }}> 행동습관 </Text>
                                요약
                            </Text>

                            <View style={styles.textBox}>
                                <Text style={styles.smallText}>
                                    김민서님은 현재 (또래 기준) 활동량이
                                    <Text style={{ fontWeight: 'bold' }}> 부족</Text>
                                    한 상태입니다.
                                </Text>
                            </View>

                            <Text style={[styles.normalText, { paddingTop: 20 }]}>내 아이
                                <Text style={{ color: 'rgba(155, 204, 151, 1)' }}> 식습관 </Text>
                                요약
                            </Text>

                            <View style={styles.textBox}>
                                <Text style={styles.smallText}>
                                    김민서님은 현재 (또래 기준)
                                    <Text style={{ fontWeight: 'bold' }}> 당류 섭취량 조절이 필요</Text>
                                    합니다.
                                </Text>
                            </View>

                            <View style={styles.kcalBox}>
                                <Text style={styles.kcalTitle}>kcal 계산</Text>

                                <View style={styles.progressWrapper}>
                                    <View style={styles.progressRow}>
                                        <Text style={styles.progressLabel}>내 아이의 열량</Text>
                                        <View style={[styles.progressBar, { width: '60%' }]} />
                                    </View>

                                    <View style={styles.progressRow}>
                                        <Text style={styles.progressLabel}>권장 섭취 열량</Text>
                                        <View style={[styles.progressBar, { width: '40%', backgroundColor: '#E2D9F3' }]} />
                                    </View>
                                </View>
                                <Text style={styles.kcalTitle}>영양소 모니터링</Text>

                                <View style={styles.nutrientButtonContainer}>
                                    <TouchableOpacity style={[styles.nutrientButton, { backgroundColor: '#B5E3C1' }]}>
                                        <Text style={styles.nutrientText}>칼슘</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.nutrientButton, { backgroundColor: '#F5D779' }]}>
                                        <Text style={styles.nutrientText}>단백질</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.nutrientButton, { backgroundColor: '#E7C6F5' }]}>
                                        <Text style={styles.nutrientText}>당류</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* 더보기 버튼 */}
                            <TouchableOpacity onPress={handleNext} style={[styles.moreBox,]}>
                                <Text style={styles.moreBoxText}>더보기</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </SafeAreaView>
        </LoginBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 50,
        alignItems: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingTop: 27,
    },
    houseicon: {
        width: 29,
        height: 29,
        resizeMode: 'contain',
    },

    profileCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'flex-start',
    },
    profileImageBox: {
        width: '45%',
        height: 200,
        backgroundColor: 'rgba(230, 230, 250, 0.55)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },

    textBox: {
        backgroundColor: 'rgba(230, 230, 250, 0.55)',
        borderRadius: 20,
        padding: 15,
        marginTop: 10,
        alignSelf: 'flex-start',

        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    profileImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },

    profileInfo: {
        flex: 1,
    },

    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(46, 8, 84, 1)',
        marginBottom: 30,
    },

    suffixText: {
        fontWeight: 'normal',
        fontSize: 16,
        color: 'rgba(46, 8, 84, 1)',
    },

    infoText: {
        fontSize: 14,
        color: 'rgba(46, 8, 84, 1)',
        marginBottom: 4,
    },

    normalText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'rgba(46, 8, 84, 1)',
    },

    smallText: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'rgba(46, 8, 84, 1)',
    },

    editButton: {
        marginTop: 20,
        backgroundColor: 'rgba(46, 8, 84, 0.45)',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
    },

    editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    kcalBox: {
        backgroundColor: 'rgba(230, 230, 250, 0.55)',
        borderRadius: 20,
        padding: 20,
        marginTop: 30,
        width: '100%',
    },

    kcalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(46, 8, 84, 1)',
        marginBottom: 10,
    },

    progressWrapper: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 12,
        marginBottom: 20,
    },

    progressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    progressLabel: {
        width: 90,
        fontSize: 13,
        color: '#555',
        marginRight: 10,
    },

    progressBar: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#C1A6F8',
    },


    nutrientButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3,
    },

    nutrientButton: {
        flex: 1,
        paddingVertical: 8,
        marginHorizontal: 4,
        borderRadius: 20,
        alignItems: 'center',
    },

    nutrientText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    moreBox: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(130, 107, 152, 1)',
        borderRadius: 30,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginTop: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },
    moreBoxText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: "bold",
    },
});