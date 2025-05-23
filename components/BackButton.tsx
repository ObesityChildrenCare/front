/* 

    Back버튼 위치 통일하려고 함수화했습니다.
    불러올땐 import BackButton from '@/components/BackButton'; 로 불러오고

    <BackButton /> 으로 back 사용

    <BackButton onPress={() => router.replace('/home')} />
    <BackButton onPress={() => router.push('/custom_screen')} />
    등으로 특수상황에서 사용 가능
    
*/
import { router } from 'expo-router';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

type BackButtonProps = {
    onPress?: () => void;
};

export default function BackButton({ onPress }: BackButtonProps) {
    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.back();
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.backArrow}>
            <Text style={styles.arrowText}>{'\u2190'}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backArrow: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
    },
    arrowText: {
        fontSize: 30,
        color: '#2E0854',
    },
});