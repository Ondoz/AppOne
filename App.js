import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Image_1 from './Image-1.png';

// export default function App() {
//   return <Text>Hallo Word</Text>;
// }

const App = () => {
  return <StyleReactNativeComponent />;
};

const StyleReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Style Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          margin: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={Image_1}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Tanjung Ringgit
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp.10.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
          }}>
          Lombok Timur
        </Text>

        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 14,
              color: 'white',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    margin: 20,
  },
});

const SampleComponent = () => {
  return (
    <View>
      <Pictue />
      <Viewbox />
      <Hallo />
      <Text>Word text</Text>
      <TextInput style={{borderWidth: 1}}></TextInput>
      <BoxGreen />
      <Profile />
    </View>
  );
};

// component yang menggunakan const
const Viewbox = () => {
  return <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />;
};

const Hallo = () => {
  return <Text>Hallo</Text>;
};

const Pictue = () => {
  return (
    <Image
      accessible
      style={{
        width: 100,
        height: 100,
        // resizeMode: 'contain',
      }}
      source={{
        uri: 'https://reactjs.org/logo-og.png',
      }}
    />
  );
};

// componet yang menggunakan class

class BoxGreen extends Component {
  render() {
    return (
      <Text style={{color: '#3498db', fontSize: 16, fontWeight: 'bold'}}>
        ini Commponent yang berasal dari class BoxGreen
      </Text>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
        <Text>cobadulu</Text>
      </View>
    );
  }
}

export default App;
