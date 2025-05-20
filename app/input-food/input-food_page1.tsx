import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function HelloWorld() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 화면 전체 채움
        justifyContent: 'center', // 수직 가운데 정렬
        alignItems: 'center',     // 수평 가운데 정렬
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});