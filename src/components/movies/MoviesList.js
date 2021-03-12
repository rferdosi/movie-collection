import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {MovieItem} from './MovieItem';

export const MoviesList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      renderItem={({item}) => (
        <MovieItem
          data={item}
          title={item.title}
          rate={item.rating}
          director={item.director}
          releaseDate={item.date_of_release}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ffffff22',
  },
});
