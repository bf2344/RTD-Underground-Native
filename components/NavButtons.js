import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavButtons = () => {
    const navigation = useNavigation();
    return (
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
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        flex: 1
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

export default NavButtons;