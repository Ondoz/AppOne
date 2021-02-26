import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Cart from '../../assets/icons/cart.png';

export default function index(props) {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={Cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text>Karang Belanja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    width: 80,
    height: 80,
    borderColor: 'gray',
    borderRadius: 80 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconCart: {width: 40, height: 40},
  notif: {
    fontSize: 12,
    textAlign: 'center',
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
