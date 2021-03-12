import React, {useState, useEffect} from 'react';
import {SafeAreaView, Dimensions, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {Carousel} from '../../components/basic';
import {CategoryCard} from '../../components/categories';
import {MovieCard} from '../../components/movies';
import {colors} from '../../constants';
import {getMovies} from '../../services';

const {width} = Dimensions.get('window');

export const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const categories = useSelector((state) => state.categories).slice(0, 10);

  useEffect(() => {
    getMovies()
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        title={'New Movies'}
        data={movies}
        renderItem={({item}) => (
          <MovieCard
            title={item.title}
            director={item.director}
            rating={item.rating}
            releaseDate={item.date_of_release}
          />
        )}
        width={width}
        itemWidth={width / 2 + 20}
      />
      <Carousel
        title={'Top Categories'}
        data={categories}
        renderItem={({item}) => <CategoryCard name={item.name} />}
        width={width}
        itemWidth={width / 2}
      />
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
