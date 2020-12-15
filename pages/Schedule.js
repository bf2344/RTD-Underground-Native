import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import ScheduleButton from '../components/ScheduleButton'
import NavButtons from '../components/NavButtons'


const Schedule = ({ navigation }) => {

  const trainArray = ["G", "B", "N", "W", "L", "A", "C", "E", "H", "D", "F", "R"]
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Image style={styles.image} source={require('../images/RTDU.png')} />
      </TouchableOpacity>
      <Text>Schedule Page</Text>
      {/* <Button
        title="Go to Stats"
        onPress={() => navigation.push('Stats')}
      /> */}

      {/* <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
<Button title="Go to Schedule" onPress={() => navigation.navigate('Home')} /> */}
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}

      <View style={styles.buttonFlex}>
        {trainArray.map(function (tLine, i) {
          return (
            <ScheduleButton name={tLine} key={i} />
          )
        })}
      </View>

      <NavButtons />

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
  buttonFlex: {
    flexDirection: 'row'
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 75,
    width: 75,
    margin: 25
  },
  text: {
    paddingHorizontal: 32
  },
  textStats: {
    paddingHorizontal: 42
  }
});

export default Schedule