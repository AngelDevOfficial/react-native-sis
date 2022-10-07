import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;