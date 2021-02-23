import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import MateriFlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StyleReactNativeComponent from './pages/StylingComponent';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 5000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StyleReactNativeComponent /> */}
        {isShow && <MateriFlexBox />}
        {/* <PositionReactNative /> */}
      </ScrollView>
    </View>
  );
};

export default App;
