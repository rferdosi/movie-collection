import React, {useState, useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';

import {TextInput, Button} from '../../components/basic';
import {colors} from '../../constants';
import {authToken} from '../../services';

export const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = useCallback(
    (user, pass) => {
      setLoading(true);
      authToken(user, pass)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            dispatch({type: 'SET_TOKEN', playload: data.token});
            AsyncStorage.setItem('token', data.token);
            navigation.navigate('Home');
          } else {
            setErrors(data);
          }
        })
        .finally(() => setLoading(false));
    },
    [dispatch, navigation],
  );
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        error={errors.username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        value={password}
        error={errors.password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        loading={loading}
        onPress={() => handleLogin(username, password)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
