import React from 'react'
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import FooterTicker from '../components/FooterTicker';
import NavButtons from '../components/NavButtons'


const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.view}>
        <View>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
            <Image style={styles.image} source={require('../images/RTDU.png')} />
        </TouchableOpacity>
        </View>
        
        <View>
        {/* Container 1 */}
    </View>

    <View>
        {/* Container 2 */}
    <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
    <Button title="Go to Schedule" onPress={() => navigation.navigate('Schedule')} />
    </View>

    {/* <NavButtons /> */}
    <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
            <Image style={styles.image} source={require('../images/Schedules.png')} />
            <Text style={styles.text}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
            <Image style={styles.image} source={require('../images/Stations.png')} />
            <Text style={styles.text}>Stations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
            <Image style={styles.image} source={require('../images/Stats.png')} />
            <Text style={styles.textStats}>Stats</Text>
        </TouchableOpacity>
        </View>
    
        <FooterTicker />
        
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

imageContainer: {
    flexDirection: 'row',
},

image:{
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


  export default HomeScreen;