import React from 'react';
import {ScrollView, View} from 'react-native';
import MateriFlexBox from './MateriFlexBox.js';
import SampleComponent from './SampleComponent.js';
import StyleReactNativeComponent from './StyleReactNativeComponent.js';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StyleReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
