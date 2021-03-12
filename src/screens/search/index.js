import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {MoviesList} from '../../components/movies';
import {SearchBox} from '../../components/search';
import {colors} from '../../constants';
import {searchMovies} from '../../services';

export const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const categories = useSelector((state) => state.categories).slice(0, 10);
  const handleSearch = useCallback(
    (search, selectedCategories) => {
      const selectedTags = selectedCategories.map((categoryId) => {
        const name = categories.find((category) => category.id === categoryId)
          .name;
        return name;
      });
      searchMovies({search, selectedTags})
        .then((res) => res.json())
        .then((data) => {
          setResults(data.results);
        });
    },
    [categories],
  );
  return (
    <View style={styles.container}>
      <SearchBox handleSearch={handleSearch} categories={categories} />
      <MoviesList data={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
