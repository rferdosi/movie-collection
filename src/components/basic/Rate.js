import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Rate = ({rate}) => {
  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4].map((star) => (
        <Icon
          key={'star_' + star}
          name={
            star < Math.floor(rate)
              ? 'star'
              : star < rate
              ? 'star-half'
              : 'star-outline'
          }
          size={15}
          color="#FFD700"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
