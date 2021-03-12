import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {CategoriesList} from '../../components/categories';
import {colors} from '../../constants';

export const CategoriesScreen = ({navigation}) => {
  const categories = useSelector((state) => state.categories);
  return (
    <SafeAreaView style={styles.container}>
      <CategoriesList
        data={categories}
        handlePressItem={(name) => navigation.navigate('Category', {name})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.background},
});
