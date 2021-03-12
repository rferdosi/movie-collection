import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Rate} from '../basic/Rate';

export const MovieItem = ({title, rate, director, releaseDate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.director}>By {director}</Text>
      <View style={styles.dateAndRateWrapper}>
        <Text style={styles.date}>{releaseDate.split('-').join('/')}</Text>
        <Rate rate={rate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#00000022',
    padding: '5%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  director: {
    color: 'white',
    fontSize: 12,
    marginTop: 6,
  },
  dateAndRateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    color: 'white',
    fontSize: 12,
    marginTop: 6,
  },
});
