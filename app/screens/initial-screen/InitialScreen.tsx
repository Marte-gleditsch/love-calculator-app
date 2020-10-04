import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { View, Image, StyleSheet } from 'react-native'
import { colors } from '/Users/martegleditsch/LoveCalculator/app/config/colors'
import { illustration } from '/Users/martegleditsch/LoveCalculator/app/config/images'
import {
  LargeTextBold,
  SmallText,
  NavigationButton,
  Blob,
  Logo,
} from '/Users/martegleditsch/LoveCalculator/app/components/index'

type Props = {
  navigation: NavigationProp<any>
}

function InitialScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Logo style={{ alignSelf: 'center' }} navigation={props.navigation} />
      <Blob size={800} color={colors.darkPink} style={styles.blob1} />
      <Blob size={800} color={colors.orange} style={styles.blob2} />

      <Image source={illustration} style={styles.illustration} resizeMode='contain' />

      <View style={styles.text}>
        <LargeTextBold>{'Is it love?'}</LargeTextBold>
        <SmallText>{'Are you sure he or she is the one for you? Is your crush worth fighting for?'}</SmallText>
      </View>

      <NavigationButton onPress={() => props.navigation.navigate('Input')} text={'Continue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 24,
    marginTop: 48,
  },
  blob1: {
    position: 'absolute',
    left: -120,
    opacity: 0.9,
    top: -60,
  },
  blob2: {
    opacity: 0.8,
    position: 'absolute',
    top: -60,
    left: -100,
    zIndex: 2,
    transform: [{ rotate: '-50deg' }],
  },
  illustration: {
    position: 'absolute',
    height: 280,
    zIndex: 3,
  },
  text: {
    alignSelf: 'flex-start',
    marginHorizontal: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default InitialScreen
