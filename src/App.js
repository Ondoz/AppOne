import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import MateriFlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import PositionReactNative from './pages/Position';
import SampleComponent from './pages/SampleComponent';
import StyleReactNativeComponent from './pages/StylingComponent';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/communication';

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
        {/* {<MateriFlexBox />} */}
        {/* <PositionReactNative /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;
