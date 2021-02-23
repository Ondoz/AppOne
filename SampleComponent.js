import React, {Component} from 'react';
import {Text, Image, TextInput, View} from 'react-native';

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

export default SampleComponent;
