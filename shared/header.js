import React from 'react';
import { StatusBar,StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({ navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/prudential_logo.jpeg')} style={styles.headerImage} />
        <Text style={styles.headerText}>Prudential</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    // margin: 20,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0078C4',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});