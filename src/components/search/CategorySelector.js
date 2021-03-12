import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {Badge} from '../basic';

export const CategorySelector = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => (
  <FlatList
    data={categories}
    horizontal
    extraData={selectedCategories}
    showsHorizontalScrollIndicator={false}
    alwaysBounceHorizontal={false}
    alwaysBounceVertical={false}
    bounces={false}
    overScrollMode="never"
    ListHeaderComponent={View}
    ListHeaderComponentStyle={styles.listVerticalItem}
    ListFooterComponent={View}
    ListFooterComponentStyle={styles.listVerticalItem}
    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => {
      const isSelected = selectedCategories.includes(item.id);
      return (
        <Badge
          title={item.name}
          active={isSelected}
          onPress={() => {
            if (isSelected) {
              setSelectedCategories((oldSelectedCategories) =>
                oldSelectedCategories.filter((id) => id !== item.id),
              );
            } else {
              setSelectedCategories((oldSelectedCategories) => [
                ...oldSelectedCategories,
                item.id,
              ]);
            }
          }}
        />
      );
    }}
  />
);

const styles = StyleSheet.create({
  listVerticalItem: {
    width: 12,
  },
  itemSeparator: {
    width: 8,
  },
});
