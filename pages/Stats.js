import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Stats = ({ navigation }) => {
    return (
      <View style={styles.view}>
        <Text>Stats Page</Text>
        <Button
        title="Go to Stats.....again"
        onPress={() => navigation.push('Stats')}
        />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Go to Schedule" onPress={() => navigation.navigate('Schedule')} />
    {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}

      </View>
    );
  }

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Stats