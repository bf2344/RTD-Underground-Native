import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, Platform } from 'react-native';
import FooterTicker from '../components/FooterTicker';
import NavButtons from '../components/NavButtons'


const HomeScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Is this working?!?!?';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        console.log(text)
    }
    return (
        <View style={styles.view}>

            <View>
                <TouchableOpacity onPress={() => navigation.push('Home')}>
                    <Image style={styles.image} source={require('../images/RTDU.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <Text>{text}</Text>
            </View>

            <View>
                {/* Container 2 */}
                <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
                <Button title="Go to Schedule" onPress={() => navigation.navigate('Schedule')} />
            </View>

            <NavButtons />


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


export default HomeScreen;