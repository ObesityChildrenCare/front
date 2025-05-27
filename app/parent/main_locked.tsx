/*
    [ 2 / 4 ]
    부모 인증을 완료하고 나면 아이에게 식사 기록 요청을 보내는 칸

*/
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function parentlocked() {

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
        router.push('/parent/summary');
    }

    return (
        <LoginBackground>
            <View style={styles.header}>
                <Image
                    source={require('@/assets/images/blackhouse_icon.png')}
                    style={styles.houseicon}
                />
                <Switch
                    trackColor={{ false: '#ccc', true: '#D8B4F8' }}
                    thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <SafeAreaView style={styles.container} edges={['top', 'bottom']} >
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

                <Text style={styles.normalText}>내 아이
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

                <Text style={[styles.normalText, { marginTop: 50 }]}>
                    식사 모니터링
                </Text>

                <View style={styles.inputRow}>
                    <View style={styles.inputBox}>
                        <Text style={[styles.smallText]}>
                            '<Text style={{ fontWeight: 'bold' }}>민서</Text>
                            에게 식사 기록 요청 보내기
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.inputArrow} onPress={handleNext}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>{'➔'}</Text>
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
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 10,
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
    inputRow: {
        width: '95%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0eaff',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    inputArrow: {
        height: '100%',
        width: 40,
        paddingHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#2E085490',
        marginLeft: 8,
    },
    inputBox: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 14,
        paddingVertical: 8,
        fontSize: 13,
        borderRadius: 10,
        color: '#000',
        backgroundColor: '#fff',
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
        marginTop: 20,
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
});