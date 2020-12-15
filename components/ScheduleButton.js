import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScheduleButton = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.buttonStyle}>
                <Button title={props.name} accessibilityLabel="Click here to go to the specific train schedule" onPress={() => navigation.navigate('Stats')}></Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
      
    }
  });

export default ScheduleButton;