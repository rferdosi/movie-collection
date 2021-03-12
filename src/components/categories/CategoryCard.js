import React from 'react';
import {Text, Dimensions, TouchableHighlight, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const CategoryCard = ({name, onPress}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="#ff6768"
      style={styles.container}>
      <Text style={styles.title}>{name}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17223b',
    width: width * 0.45,
    aspectRatio: 2,
    margin: 8,
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: 'white', textTransform: 'uppercase'},
});
