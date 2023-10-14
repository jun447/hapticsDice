 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable,Button } from 'react-native';
import React, { useState} from 'react';
import * as Haptics from 'expo-haptics';

import DiceOne from './assets/One.png';
import DiceTwo from './assets/Two.png';
import DiceThree from './assets/Three.png';
import DiceFour from './assets/Four.png';
import DiceFive from './assets/Five.png';
import DiceSix from './assets/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

const Dice = ({ imageUrl }) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App() {
  const [dice, setDice] = useState(DiceOne);
  
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice(DiceOne);
        break;
      case 2:
        setDice(DiceTwo);
        break;
      case 3:
        setDice(DiceThree);
        break;
      case 4:
        setDice(DiceFour);
        break;
      case 5:
        setDice(DiceFive);
        break;
      case 6:
        setDice(DiceSix);
        break;
      default:
        setDice(DiceOne);
        break;
    }
  }
   
  const onPress = () => {
    rollDice();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={dice} />
      <Pressable onPress={onPress}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});