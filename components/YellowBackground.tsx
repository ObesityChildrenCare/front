import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  children: ReactNode;
}

export default function GradientBackground({ children }: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient colors={['#FFD060', '#ffffff']} style={styles.background}>
        {children}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
