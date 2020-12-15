import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./pages/HomeScreen";
import Schedule from "./pages/Schedule";
import Stats from "./pages/Stats";
import ScheduleButtons from './components/NavButtons'



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Schedule" component={Schedule} options={{ title: 'Schedule' }} />
        <Stack.Screen name="Stats" component={Stats} options={{ title: 'Stats' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
