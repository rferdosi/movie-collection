import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {CategorySelector} from './CategorySelector';

export const SearchBox = ({categories, handleSearch}) => {
  const [value, setValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const timeoutRef = useRef();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (value || selectedCategories.length) {
      timeoutRef.current = setTimeout(
        () => handleSearch(value, selectedCategories),
        700,
      );
    }
  }, [handleSearch, value, selectedCategories]);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Icon name="search-outline" size={24} color={'white'} />
        <TextInput
          value={value}
          placeholder="Search movies and directors"
          placeholderTextColor="#6b778d"
          returnKeyType="search"
          autoFocus
          style={styles.input}
          onChangeText={setValue}
        />
        {value !== '' && (
          <TouchableOpacity onPress={() => setValue('')}>
            <Icon name="close-outline" size={24} color={'white'} />
          </TouchableOpacity>
        )}
      </View>
      <CategorySelector
        {...{categories, selectedCategories, setSelectedCategories}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#00000020',
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#00000055',
  },
  inputWrapper: {
    flexDirection: 'row',
    marginHorizontal: 12,
    height: 50,
    backgroundColor: '#1C2A44',
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
  },
  input: {
    flex: 1,
    marginLeft: 4,
    fontSize: 14,
    padding: 0,
    color: 'white',
  },
});
