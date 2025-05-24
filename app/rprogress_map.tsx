// rprogress_map
import LoginBackground from '@/components/LoginBackground';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function RProgressMap() {
  const goBack = () => {
    router.replace('/kids_main');
  };

  const goToPuzzle = () => {
    router.push('/rreward_check');
  };

  const goToGhost = () => {
    router.push('/rwork_check_ghost');
  };

  const goToBat = () => {
    router.push('/rwork_check_bat');
  };

  const goToHouse = () => {
    router.push('/rwork_checkfin');
  };

  return (
    <LoginBackground>
      <SafeAreaView style={styles.container}>
        {/* 상단 네비게이션 */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Image source={require('@/assets/images/prev_key.png')} style={styles.iconNav} />
          </TouchableOpacity>

          {/* 퍼즐 아이콘 + 배경 원 함께 감싸기 */}
          <View style={styles.puzzleWrapper}>
            <View style={styles.circle_puzzle} />
            <TouchableOpacity onPress={goToPuzzle} style={styles.puzzleTouchable}>
              <Image source={require('@/assets/images/yellow_puzzle.png')} style={styles.iconPuzzle} />
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity onPress={goToPuzzle}>
            <Image source={require('@/assets/images/yellow_puzzle.png')} style={styles.iconPuzzle} />
          </TouchableOpacity>
          <View style={[styles.circle_puzzle, styles.circle_p]} /> */}
        </View>

        {/* 경로 배경 */}
        <View style={styles.pathContainer}>
          <Image source={require('@/assets/images/path_map.png')} style={styles.pathImage} />
          {/* 경로 위 원 */}
          <View style={[styles.circle, styles.circle1]} />
          <View style={[styles.circle_purple, styles.circle2]} />
          <View style={[styles.circle, styles.circle3]} />
          <View style={[styles.circle_Violet, styles.circle4]} />
        </View>

        {/* 집 아이콘 */}
        <TouchableOpacity style={styles.housePosition} onPress={goToHouse}>
          <Image source={require('@/assets/images/house.png')} style={styles.house} />
        </TouchableOpacity>

        {/* 유령 아이콘 */}
        <TouchableOpacity style={styles.ghostPosition} onPress={goToGhost}>
          <Image source={require('@/assets/images/ghost.png')} style={styles.character_ghost} />
        </TouchableOpacity>

        {/* 박쥐 아이콘 */}
        <TouchableOpacity style={styles.batPosition} onPress={goToBat}>
          <Image source={require('@/assets/images/bat.png')} style={styles.character_bat} />
        </TouchableOpacity>
      </SafeAreaView>
    </LoginBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconNav: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  iconPuzzle: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },

  puzzleWrapper: {
  position: 'relative',
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},

  circle_puzzle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#E6E6FA',
    zIndex: 1,
},

  puzzleTouchable: {
    zIndex: 2,
  },

  pathContainer: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 0,
  },
  pathImage: {
    width: 300,
    height: 450,
    zIndex: 0,
    resizeMode: 'contain',
  },
  housePosition: {
    position: 'absolute',
    top: 50,
    left:80 ,
    alignSelf: 'center',
  },
  house: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    zIndex: 10,
  },
  ghostPosition: {
    position: 'absolute',
    top: 210,
    left: 60,
    alignSelf: 'center',
    transform: [{ translateX: -60 }],
  },
  batPosition: {
    position: 'absolute',
    top: 390,
    left:0,
    alignSelf: 'center',
    transform: [{ translateX: 40 }],
  },
  character_bat: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    zIndex: 10,
  },
  character_ghost: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    zIndex: 10,
  },
  circle: {
  position: 'absolute',
  width: 80,
  height: 80,
  borderRadius: 100,
  backgroundColor: 'rgba(255, 215, 0, 0.5)',
  zIndex: 2, // 경로보다 위
  },
  circle_purple: {
  position: 'absolute',
  width: 80,
  height: 80,
  borderRadius: 100,
  backgroundColor: 'rgba(236, 212, 251, 0.8)',
  zIndex: 2, // 경로보다 위
  },
  circle_Violet: {
  position: 'absolute',
  width: 80,
  height: 80,
  borderRadius: 100,
  backgroundColor: '#c8a2e0',
  zIndex: 2, // 경로보다 위
  },
  
  circle1: {
  top: 120,
  left: 280,
  },
  circle2: {
    top: 190,
    left: 70,
  },
  circle3: {
    top: 330,
    left: 70,
  },
  circle4: {
    top: 400,
    left: 270,
  },
  circle_p: {
    top: 10,
    left: 100,
  },
});
