import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View>
      <View style={{alignItems: 'center', marginRight: 20}}>
        <Image
          source={{
            uri: props.image,
          }}
          style={styles.image}
        />
        <Text>{props.title}</Text>
      </View>
    </View>
  );
};

export default function index() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Dinamis Props</Text>
      </View>
      <ScrollView horizontal>
        <View style={styles.viewStory}>
          <Story
            title="Alfia"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/130164631_1378867022455263_2227570477260383344_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=gWF6_pBEddEAX8bdA4N&tp=1&oh=91de8dd3eb28bab3dfc2eaaadcdf9cb4&oe=605DD231"
          />
          <Story
            title="Story 1"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/145125327_930126691128303_3666522824341250880_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=IY6P_jK2vowAX-PeLf7&tp=1&oh=41126a2fa6c467d93cd5676743dfe03b&oe=6060749C"
          />
          <Story
            title="Story 2"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/151194465_527662471532078_9057661956168826264_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=C-L4e3W0EKEAX-VAqvW&tp=1&oh=fdbeec28295e45a21fb89de6adf58132&oe=605DDDB7"
          />
          <Story
            title="Story 3"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/106217654_565363181035811_8015273539296349974_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=UPGJqLJaAYkAX9MSmIB&tp=1&oh=d95cd5ff4a717ca35778ddac029feae4&oe=605EE338"
          />
          <Story
            title="Story 4"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/129210299_866681244082900_5494631466231069461_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=O_x6G9_813UAX-WI5sL&tp=1&oh=72f7659a48312990dbc45e51f0c07fca&oe=605DDB45"
          />
          <Story
            title="Story 5"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130998953_208850620870196_7724568463620701694_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=J42O3FswJ8IAX-3rj01&tp=1&oh=4e17200b02d3cd14c106c8453639e8b1&oe=605FB6F3"
          />
          <Story
            title="Story 6"
            image="https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/152019203_257791559310139_7258510717228480421_n.jpg?_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=TjbTR5R3sagAX9OJB1Z&tp=1&oh=804eb1479993e7745c70e8d1c110b153&oe=60615275"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {alignItems: 'center', justifyContent: 'center'},
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewStory: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
});
