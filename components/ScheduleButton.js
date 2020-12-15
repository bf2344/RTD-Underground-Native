import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScheduleButton = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity>
                <Button style={styles.buttonStyle} 
                title={props.name} 
                accessibilityLabel="Click here to go to the specific train schedule" 
                onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
  });

export default ScheduleButton;