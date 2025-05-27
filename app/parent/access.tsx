/*
    [ 1 / 4 ]
    family main에서 on/off 버튼을 누르면 나오는 부모 인증 화면

*/
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function parentAccess() {

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
        if (password.trim()) {
            router.push('/parent/main_locked');
        } else {
            alert('암호를 입력해주세요.');
        }
    };

    const handleHome = () => {
        router.replace('/family_main');
    }

    const [password, setpassword] = useState('');

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

            <SafeAreaView style={styles.container}>

                <Image
                    source={require('@/assets/images/smile_panda.png')}
                    style={styles.panda}
                />

                <Text style={styles.title}>DO,IT</Text>
                <Text style={styles.description}>
                암호를 입력하세요.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="로그인 비밀번호를 입력하세요."
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setpassword}
                    secureTextEntry={true}
                />

                {/* 로그인 버튼 */}
                <TouchableOpacity onPress={handleNext} style={[styles.loginBox,]}>
                    <Text style={styles.loginBoxText}>로그인</Text>
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
        paddingHorizontal: 20,
        paddingTop: 40,
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
    panda: {
        width: 133,
        height: 129,
        marginBottom: 2,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#D8B4F8',
        marginBottom: 30,
        textShadowColor: '#bab1c4',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    description: {
        fontSize: 16,
        color: '#2E0854',
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 20,
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 16,
        textAlign: 'center',
        fontSize: 13,
        marginBottom: 60,
        color: '#000',
    },

    loginBox: {
        width: '80%',
        height: 45,
        backgroundColor: 'rgba(216, 180, 248, 1)',
        borderRadius: 30,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginBottom: 0,

        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBoxText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: "bold",
    },
});