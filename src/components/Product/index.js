import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import Image_1 from '../../assets/image/Image-1.png';

export default function index(props) {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image
          source={Image_1}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={styles.productName}>Tanjung Ringgit</Text>
        <Text style={styles.productPrice}>Rp.10.000.000</Text>
        <Text style={styles.location}>Lombok Timur</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
    justifyContent: 'center',
  },
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  location: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
});
