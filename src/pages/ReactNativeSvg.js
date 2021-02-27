import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoadingSvg from '../assets/image/loading.svg';

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>React Native SVG</Text>
      <LoadingSvg width={244} haight={125} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
  },
});
