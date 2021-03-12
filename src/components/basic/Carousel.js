import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

export const Carousel = ({title, data, renderItem, width, itemWidth}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SnapCarousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    color: 'white',
    fontSize: 15,
    marginLeft: 16,
    marginBottom: 8,
  },
});
