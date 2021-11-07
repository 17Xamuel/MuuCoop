import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

//network
import FormsApi from '../HttpHelper/post';

//storage
import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {passwordVisible: false, member_number: '', password: ''};
  }

  componentDidMount = () => {
    if (this.props.route.params.member_number) {
      this.setState({
        ...this.state,
        member_number: `${this.props.route.params.member_number}`,
      });
    }
  };

  togglePassword = () => {
    this.setState({
      ...this.state,
      passwordVisible: !this.state.passwordVisible,
    });
  };
  post = async () => {
    ToastAndroid.show('Please Wait...', ToastAndroid.SHORT);
    if (this.state.member_number === '' || this.state.password === '') {
      ToastAndroid.show('All Fields are Required...', ToastAndroid.LONG);
      return;
    }
    let data = {
      number: this.state.member_number,
      password: this.state.password,
    };
    let api = new FormsApi();
    let res = await api.post(`/app/login`, data);
    if (res !== 'Error') {
      if (res.data === 'Error') {
        ToastAndroid.show('An Error Occured', ToastAndroid.LONG);
      } else if (res.data === 'Wrong_details') {
        ToastAndroid.show('Wrong Username or Password', ToastAndroid.LONG);
      } else {
        ToastAndroid.show('Success, Redirecting...', ToastAndroid.LONG);
        await AsyncStorage.setItem('user', JSON.stringify(res), error => {
          if (error) {
            Alert.alert('Error', 'An Error Occured, Start The App Again', [
              {
                text: 'Exit',
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
            ]);
          } else {
            this.props.navigation.navigate('BottomTabs');
          }
        });
      }
    } else {
      ToastAndroid.show(
        'An Error Occured, Check Your Internet...',
        ToastAndroid.LONG,
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Animatable.View style={styles.welcome} animation="fadeIn">
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
              paddingHorizontal: 20,
            }}>
            MUU Coop
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
              paddingHorizontal: 20,
            }}>
            Sign in With Your Member Number
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.login} animation="fadeInUpBig">
          <View>
            <TextInput
              style={styles.input_ctr}
              label="Member Number"
              keyboardType="number-pad"
              value={this.state.member_number}
              mode="outlined"
              right={<TextInput.Icon name="account-circle-outline" />}
              onChangeText={e => {
                this.setState({...this.state, member_number: e});
              }}
            />
            <TextInput
              style={styles.input_ctr}
              label="Member Password"
              mode="outlined"
              secureTextEntry={!this.state.passwordVisible}
              onChangeText={e => {
                this.setState({...this.state, password: e});
              }}
              right={
                <TextInput.Icon
                  name={this.state.passwordVisible ? 'eye-off' : 'eye'}
                  onPress={this.togglePassword}
                />
              }
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.post}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                paddingBottom: 5,
                marginRight: 15,
              }}>
              Sign In
            </Text>
            {/* <FontAwesome5Icon name="chevron-right" size={18} color="#fff" /> */}
            <Feather name="chevron-right" size={18} color="#fff" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Text
                style={{paddingRight: 5, paddingVertical: 5}}
                onPress={() => {
                  this.props.navigation.navigate('Register');
                }}>
                No Account? Register.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{paddingRight: 5, paddingVertical: 5}}
                onPress={() => {
                  Alert.alert(
                    'In Process',
                    'Forgot password is not functioning at the moment...',
                  );
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005CE6',
  },
  login: {
    flex: 4.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  welcome: {
    flex: 1.5,
    justifyContent: 'flex-end',
    paddingVertical: 15,
  },

  input_ctr: {
    marginBottom: 32,
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#005CE6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: 5,
  },
});
export default Login;
