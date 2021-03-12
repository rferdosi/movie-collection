import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export const Button = ({title, loading, ...otherProps}) => {
  return (
    <TouchableOpacity style={styles.container} {...otherProps}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{title || 'submit'}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    borderRadius: 8,
    margin: 8,
    backgroundColor: '#ff6768',
    minWidth: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
