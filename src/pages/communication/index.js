import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

export default function index() {
  const [total, setTotal] = useState(0);

  return (
    <View style={styles.werraper}>
      <Text style={styles.textTitle}>Communication</Text>
      <Cart quantity={total} />
      <Product onButtonPress={() => setTotal(total + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  werraper: {
    padding: 20,
    alignItems: 'center',
  },
  textTitle: {
    textAlign: 'center',
  },
});
