import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyAppBar = () => {
  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity style={styles.leftButton} onPress={() => console.log('Left button pressed')}>
        <Icon name="truck" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightButton} onPress={() => console.log('Right button pressed')}>
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Other components can go here */}
        <MyAppBar />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  leftButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  rightButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default Home;
