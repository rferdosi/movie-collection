import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {BottomTabNavigator} from './BottomTabNavigator';
import {LoginScreen, SplashScreen} from '../screens';
import {getCategories} from '../services';

const Stack = createStackNavigator();

export const AppStack = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const savedToken = await AsyncStorage.getItem('token');
      if (savedToken) {
        getCategories()
          .then((res) => res.json())
          .then((data) => {
            dispatch({type: 'SET_TOKEN', playload: savedToken});
            dispatch({type: 'SET_CATEGORIES', playload: data.results});
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      } else {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);
  return isLoading ? (
    <SplashScreen />
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <>
          <Stack.Screen name="App" component={BottomTabNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
