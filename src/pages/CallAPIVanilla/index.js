import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function index() {
  useEffect(() => {
    // Call Method GET
    // fetch('https://reqres.in/api/users?page=2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // Call Method Post
    const dataForAPi = {
      name: 'morpheus',
      job: 'leader',
    };
    console.log('data Object: ', dataForAPi);
    console.log('data stringify: ', JSON.stringify(dataForAPi));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPi),
    })
      .then((response) => response.json())
      .then((json) => console.log('response POST', json));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call Api Vanilla</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 24,
  },
});
