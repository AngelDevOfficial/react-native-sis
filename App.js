import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import Routes from './src/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Routes />
      <Text>Fuck you bro</Text>
    </>
  );
}
