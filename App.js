import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator'; // Import your AppNavigator component

const Stack = createStackNavigator();

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Featured</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for books"
      />
    </View>
  );
};

const Footer = ({ navigation }) => {
  const buttons = ['Books', 'Audio Books', 'Settings', 'Search'];

  return (
    <View style={styles.footer}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.footerButton}
          onPress={() => navigation.navigate(button)}
        >
          <Text style={styles.footerButtonText}>{button}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Books = () => {
  return (
    <View style={styles.body}>
      <Text>Books Screen</Text>
    </View>
  );
};

const AudioBooks = () => {
  return (
    <View style={styles.body}>
      <Text>Audio Books Screen</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={styles.body}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Search = () => {
  return (
    <View style={styles.body}>
      <Text>Search Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Audio Books" component={AudioBooks} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  // ... Your existing styles ...
});

export default App; // Export the modified App component
