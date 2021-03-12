import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {CategoriesScreen, CategoryScreen} from '../screens';

const Stack = createStackNavigator();

export const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#17223b'},
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};
