import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from './cart.png';

export default function PositionReactNative() {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconCart: {width: 40, height: 40},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 5,
    width: 24,
    height: 24,
    borderRadius: 25,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
