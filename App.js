import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar hidden />
    <View style={styles.container}>
      
      <View style={styles.topBar} />

      <View style={styles.quadrado} />
      <View style={styles.title} />

      <View style={styles.text}>
        <View style={styles.top} />
        <View style={styles.bot} />
      </View>
      <View style={styles.meio} />

      <View style={styles.containerBoxs}>
        <View style={styles.containerLine}>
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>

        <View style={styles.containerLine}>
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>

        <View style={styles.footer} />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    height: 25,
    backgroundColor: '#50E3C2',
  },
  quadrado: {
    height: 100,
    width: 100,
    backgroundColor: '#F5A623',
    alignSelf: 'center',
    marginTop: 35,
  },
  title: {
    height: 30,
    width: '45%',
    alignSelf: 'center',
    backgroundColor: '#F5A623',
    marginTop: 22,
  },
  text: {
    height: 78,
    marginTop: 35,
    flexDirection: 'row',
  },
  top: {
    flex: 1,
    backgroundColor: '#9013FE',
  },
  bot: {
    flex: 1,
    backgroundColor: '#4A90E2',
  },
  meio: {
    backgroundColor: '#50E3C2',
    height: 13,
  },
  containerBoxs: {
    flex: 1,
    justifyContent: "space-between"
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer: {
    height: 60,
    backgroundColor: '#4A90E2',
  },
});

export default App;
