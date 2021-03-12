import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Badge = ({title, active, onPress}) => {
  const backgroundColor = active ? '#ff6768' : 'transparent';
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00000022',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {color: 'white', fontSize: 12},
});
