import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      follower: 200,
    };
  }
  componentDidMount() {
    console.log('component did mount');
    setTimeout(() => {
      this.setState({
        follower: 404,
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    console.log('render');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        </View>
        {/* 
        <View
          //alignItems Flex-end, Flex-start, Center
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{backgroundColor: 'red', flex: 1, height: 50}} />
          <View style={{backgroundColor: 'yellow', flex: 1, height: 50}} />
          <View style={{backgroundColor: 'green', flex: 1, height: 50}} />
          <View style={{backgroundColor: 'blue', flex: 1, height: 50}} />
        </View>

        <View
          style={{
            backgroundColor: 'gray',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 100}} />
          <View style={{backgroundColor: 'green', width: 50, height: 150}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 200}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', flex: 1, height: 50}} />
          <View style={{backgroundColor: 'green', flex: 2, height: 50}} />
          <View style={{backgroundColor: 'blue', flex: 3, height: 50}} />
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image
            source={{
              uri:
                'https://yt3.ggpht.com/yti/ANoDKi7yI50RtQUsFkvNm7mK7SUEckx6PSQ74EVSCuVAdQ=s88-c-k-c0x00ffffff-no-rj-mo',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
          />
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Gilang Wahyudi
            </Text>
            <Text>Laravel Entusiast</Text>
            <Text>{this.state.follower}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
