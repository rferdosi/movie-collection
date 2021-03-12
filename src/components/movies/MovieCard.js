import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../constants';

import {Rate} from '../basic/Rate';

export const MovieCard = ({title, director, rating, releaseDate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{director}</Text>
      <Text style={styles.info}>{releaseDate.split('-').join('/')}</Text>
      <Rate rate={rating} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryDark,
    margin: 8,
    padding: 12,
    borderRadius: 8,
  },
  title: {color: colors.secondary, fontWeight: 'bold', marginBottom: 16},
  info: {color: colors.white, marginVertical: 8},
});
