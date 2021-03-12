import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import {colors} from '../../constants';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
