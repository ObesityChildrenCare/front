import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
}

export default function GradientBackground({ children }: Props) {
  return (
    <LinearGradient colors={['#ECD6FF', '#ffffff']} style={styles.background}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
