import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import TextTicker from 'react-native-text-ticker'

export default class Example extends PureComponent {
  render(){
    return(
      <View style={styles.container}>
        <TextTicker
          style={styles.textTicker}
          duration={7000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
          This is going to be a long string so keep reading because I am going to keep typing and I bet you by the time I stop typing that this god damn ticker is going to work and I am going to get crunk.  
        </TextTicker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTicker: {
      fontSize: 18,
      paddingTop: 300
  }
});