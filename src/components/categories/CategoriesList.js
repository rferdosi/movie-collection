import React from 'react';
import {FlatList} from 'react-native';

import {CategoryCard} from './CategoryCard';

export const CategoriesList = ({data, handlePressItem}) => (
  <FlatList
    data={data}
    numColumns={2}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <CategoryCard
        name={item.name}
        onPress={() => handlePressItem(item.name)}
      />
    )}
  />
);
