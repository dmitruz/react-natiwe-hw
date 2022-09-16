import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { authSignUpUser } from '../../redux/auth/authOperations';
import { AvatarContainer } from '../../components';

const initialState = {
  name: '',
  email: '',
  password: '',
}

export function RegistrationScreen({ navigation }) {
  console.log('****** RegistrationScreen *******');

  const dispatch = useDispatch()

  const [state, setState] = useState(initialState)

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [focusNameInput, setFocusNameInput] = useState(false);
  const [focusEmailInput, setFocusEmailInput] = useState(false);
  const [focusPasswordInput, setFocusPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const nameInputHandler = (text) => {
    setState(prevState => ({ ...prevState, name: text }))
  };
  const emailInputHandler = (text) => {
    setState(prevState => ({ ...prevState, email: text }))
  };
  const passwordInputHandler = (text) => {
    setState(prevState => ({ ...prevState, password: text }))
  };

  const hideKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  }

  const handleSubmit = async () => {
    hideKeyboard();
    dispatch(authSignUpUser(state));
    setState(initialState);
  }

  const onFocusNameInput = () => {
    setShowKeyboard(true);
    setFocusNameInput(true);
  }
  const onBlurNameInput = () => {
    setShowKeyboard(false);
    setFocusNameInput(false);
  }

  const onFocusEmailInput = () => {
    setShowKeyboard(true);
    setFocusEmailInput(true);
  }
  const onBlurEmailInput = () => {
    setShowKeyboard(false);
    setFocusEmailInput(false);
  }

  const onFocusPasswordInput = () => {
    setShowKeyboard(true);
    setFocusPasswordInput(true);
  }
  const onBlurPasswordInput = () => {
    setShowKeyboard(false);
    setFocusPasswordInput(false);
  }

  const showHidePass = () => {
    setShowPassword(!showPassword);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground
          source={require('../../assets/img/PhotoBG.png')}
          style={styles.bgImage}
        >
          <View style={styles.form}>
            <View style={styles.avatar}>
              <AvatarContainer />
            </View>
            {/* Название формы */}
            <Text style={styles.formTitle}>
              Регистрация
            </Text>
            {/* Name */}
            <TextInput
              placeholder='Имя'
              placeholderTextColor='#BDBDBD'
              value={state.name}
              onChangeText={nameInputHandler}
              onFocus={onFocusNameInput}
              onBlur={onBlurNameInput}
              style={{
                ...styles.input,
                borderColor: focusNameInput ? '#FF6C00' : '#E8E8E8',
                backgroundColor: focusNameInput ? '#FFFFFF' : '#F6F6F6',
              }}
            />
            {/* Email */}
            <TextInput
              placeholder='Адрес электронной почты'
              placeholderTextColor='#BDBDBD'
              value={state.email}
              onChangeText={emailInputHandler}
              onFocus={onFocusEmailInput}
              onBlur={onBlurEmailInput}
              style={{
                ...styles.input,
                borderColor: focusEmailInput ? '#FF6C00' : '#E8E8E8',
                backgroundColor: focusEmailInput ? '#FFFFFF' : '#F6F6F6',
              }}
            />

            <View style={styles.inputPassWrapper}>
              {/* Password */}
              <TextInput
                placeholder='Пароль'
                placeholderTextColor='#BDBDBD'
                secureTextEntry={!showPassword ? true : false}
                value={state.password}
                onChangeText={passwordInputHandler}
                onFocus={onFocusPasswordInput}
                onBlur={onBlurPasswordInput}
                style={{
                  ...styles.input,
                  borderColor: focusPasswordInput ? '#FF6C00' : '#E8E8E8',
                  backgroundColor: focusPasswordInput ? '#FFFFFF' : '#F6F6F6',
                }}
              />

              {/* Кнопка Show/Hide password */}
              <TouchableOpacity
                style={styles.btnShowpass}
                activeOpacity={0.8}
                onPress={showHidePass}
              >
                <Text style={styles.btnShowpassTitle}>
                  показать
                </Text>
              </TouchableOpacity>
            </View>
            {/* Кнопка Register */}
            <TouchableOpacity
              style={styles.btnRegister}
              activeOpacity={0.8}
              onPress={handleSubmit}
            >
              <Text style={styles.btnRegisterTitle}>
                Зарегистрироваться
              </Text>
            </TouchableOpacity>
            {/* Cсылка на  страницу Login */}
            <TouchableOpacity
              style={{ marginBottom: showKeyboard ? -97 : 78 }} /* 207-78=129-32=97 */
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.link}>
                Уже есть аккаунт? Войти
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  form: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingTop: 92,
    paddingHorizontal: 16,
  },
  avatar: {
    position: 'absolute',
    top: -60,
    // left: 128,
  },
  formTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',

    marginBottom: 32,
  },

  inputPassWrapper: {
    position: 'relative',
  },

  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',

    borderWidth: 1,
    borderRadius: 8,

    paddingHorizontal: 16,

    width: 343,
    height: 50,

    marginBottom: 16,
  },

  btnShowpass: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  btnShowpassTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'right',

    color: '#1B4371',
  },

  btnRegister: {
    backgroundColor: '#FF6C00',
    borderRadius: 100,

    paddingHorizontal: 16,

    width: 343,
    height: 51,

    marginTop: 27,
    marginBottom: 16,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRegisterTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#ffffff',
  },

  link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    // textAlign: 'center',
    color: '#1B4371',
  }
})