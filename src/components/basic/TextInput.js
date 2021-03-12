import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');

export const TextInput = ({label, error, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput style={styles.input} {...otherProps} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 8},
  label: {color: 'white', marginBottom: 4},
  input: {
    height: 50,
    borderRadius: 8,
    width: width * 0.8,
    backgroundColor: '#1C2A44',
    color: 'white',
    padding: 8,
  },
  error: {color: 'red', marginTop: 4, fontSize: 10},
});
