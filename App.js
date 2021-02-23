import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './SampleComponent.js';
import StyleReactNativeComponent from './StyleReactNativeComponent.js';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StyleReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
