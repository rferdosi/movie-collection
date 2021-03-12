import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';

import {MoviesList} from '../../components/movies';
import {colors} from '../../constants';
import {getTagMovies} from '../../services';

export const CategoryScreen = ({route}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {name} = route.params;
  useEffect(() => {
    setIsLoading(true);
    getTagMovies({tag: name})
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [name]);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <MoviesList data={movies} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
