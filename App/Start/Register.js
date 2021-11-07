import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

//network
import FormsApi from '../HttpHelper/post';

//storage
import AsyncStorage from '@react-native-async-storage/async-storage';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      passwordVisible: false,
      surname: '',
      firstname: '',
      nin: '',
      phone: '',
      email: '',
      password: '',
      next_of_kin: '',
      next_of_kin_contact: '',
      mbr_location: '',
      mbr_photo: '',
    };
  }

  togglePassword = () => {
    this.setState({
      ...this.state,
      passwordVisible: !this.state.passwordVisible,
    });
  };
  post = async () => {
    ToastAndroid.show('Please Wait...', ToastAndroid.SHORT);
    if (this.state.mbr_location === '' || this.state.password === '') {
      ToastAndroid.show('These Fields are Required...', ToastAndroid.LONG);
      return;
    }
    let data = {
      member_first_name: this.state.firstname,
      member_surname: this.state.surname,
      member_nin: this.state.nin,
      member_email: this.state.email,
      member_phone: this.state.phone,
      member_password: this.state.password,
      member_next_of_kin: this.state.next_of_kin,
      member_next_of_kin_phone: this.state.next_of_kin_contact,
      member_location: this.state.mbr_location,
    };
    let api = new FormsApi();
    let res = await api.post(`/app/new_member`, data);
    if (res !== 'Error') {
      if (res.data === 'Error') {
        ToastAndroid.show('An Error Occured', ToastAndroid.LONG);
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
    if (this.state.activeTab === 0) {
      return (
        <View style={styles.container}>
          <Animatable.View style={styles.welcome} animation="fadeIn">
            <Text
              style={{
                fontSize: 32,
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
              MUU Coop - Registration
            </Text>
          </Animatable.View>
          <Animatable.View style={styles.login} animation="fadeInUpBig">
            <View>
              <TextInput
                style={styles.input_ctr}
                label="Surname"
                value={this.state.surname}
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, surname: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
                value={this.state.firstname}
                label="First Name"
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, firstname: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
                label="NIN Number"
                value={this.state.nin}
                mode="outlined"
                onChangeText={e => {
                  this.setState({...this.state, nin: e});
                }}
                right={<TextInput.Icon name="account-circle-outline" />}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (
                  this.state.firstname == '' ||
                  this.state.surname == '' ||
                  this.state.nin == ''
                ) {
                  ToastAndroid.show(
                    'All Fields are required',
                    ToastAndroid.SHORT,
                  );
                } else {
                  this.setState({
                    ...this.state,
                    activeTab: this.state.activeTab + 1,
                  });
                }
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  paddingBottom: 5,
                  marginRight: 15,
                }}>
                Next
              </Text>
              <Feather name="chevron-right" size={18} color="#fff" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Text
                  style={{paddingRight: 5, paddingVertical: 5}}
                  onPress={() => {
                    this.props.navigation.navigate('Login');
                  }}>
                  Have an account? Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <View style={styles.container}>
          <Animatable.View style={styles.welcome} animation="fadeIn">
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              Contact Details
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              MUU Coop - Registration
            </Text>
          </Animatable.View>
          <Animatable.View style={styles.login} animation="fadeInUpBig">
            <View>
              <TextInput
                style={styles.input_ctr}
                label="Phone Contact"
                mode="outlined"
                value={this.state.phone}
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, phone: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
                label="Email"
                value={this.state.email}
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, email: e});
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.stepButton}
                onPress={() => {
                  this.setState({
                    ...this.state,
                    activeTab: this.state.activeTab - 1,
                  });
                }}>
                <Feather name="chevron-left" size={18} color="#fff" />
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    paddingBottom: 2,
                    marginRight: 15,
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.stepButton}
                onPress={() => {
                  if (this.state.phone == '' || this.state.email == '') {
                    ToastAndroid.show(
                      'All Fields are required',
                      ToastAndroid.SHORT,
                    );
                  } else {
                    this.setState({
                      ...this.state,
                      activeTab: this.state.activeTab + 1,
                    });
                  }
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    paddingBottom: 2,
                    marginRight: 2,
                  }}>
                  Next
                </Text>
                <Feather name="chevron-right" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <View style={styles.container}>
          <Animatable.View style={styles.welcome} animation="fadeIn">
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              Next Of Kin
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              MUU Coop - Registration
            </Text>
          </Animatable.View>
          <Animatable.View style={styles.login} animation="fadeInUpBig">
            <View>
              <TextInput
                style={styles.input_ctr}
                label="Next Of Kin Name"
                value={this.state.next_of_kin}
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, next_of_kin: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
                value={this.state.next_of_kin_contact}
                label="Next Of Kin - Phone Contact"
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, next_of_kin_contact: e});
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={styles.stepButton}
                onPress={() => {
                  this.setState({
                    ...this.state,
                    activeTab: this.state.activeTab - 1,
                  });
                }}>
                <Feather name="chevron-left" size={18} color="#fff" />
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    paddingBottom: 2,
                    marginRight: 15,
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.stepButton}
                onPress={() => {
                  if (
                    this.state.next_of_kin == '' ||
                    this.state.next_of_kin_contact == ''
                  ) {
                    ToastAndroid.show(
                      'All Fields are required',
                      ToastAndroid.SHORT,
                    );
                  } else {
                    this.setState({
                      ...this.state,
                      activeTab: this.state.activeTab + 1,
                    });
                  }
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    paddingBottom: 2,
                    marginRight: 2,
                  }}>
                  Next
                </Text>
                <Feather name="chevron-right" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <View style={styles.container}>
          <Animatable.View style={styles.welcome} animation="fadeIn">
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              Your Location &amp; Passport Photo
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              MUU Coop - Registration
            </Text>
          </Animatable.View>
          <Animatable.View style={styles.login} animation="fadeInUpBig">
            <View>
              <TextInput
                style={styles.input_ctr}
                label="Type Your Location"
                mode="outlined"
                value={this.state.mbr_location}
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, mbr_location: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
                value={this.state.password}
                label="Please Set your password"
                mode="outlined"
                secureTextEntry={true}
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, password: e});
                }}
              />
            </View>
            <View>
              <View
                style={{
                  marginVertical: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Resources/place-holder.jpg')}
                  style={{height: 100, width: 100, borderRadius: 50}}
                />
                <TouchableOpacity
                  style={[styles.stepButton, {height: 50, marginLeft: 15}]}
                  onPress={() => {
                    this.setState({
                      ...this.state,
                      activeTab: this.state.activeTab - 1,
                    });
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#fff',
                      paddingBottom: 2,
                    }}>
                    Change Passport Photo
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontSize: 15, margin: 10}}>Passport Photo</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <TouchableOpacity
                style={styles.stepButton}
                onPress={() => {
                  this.setState({
                    ...this.state,
                    activeTab: this.state.activeTab - 1,
                  });
                }}>
                <Feather name="chevron-left" size={18} color="#fff" />
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    paddingBottom: 2,
                    marginRight: 15,
                  }}>
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stepButton} onPress={this.post}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    paddingBottom: 2,
                    marginRight: 2,
                  }}>
                  Finish
                </Text>
                <Feather name="chevron-right" size={18} color="#fff" />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      );
    }
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
  stepButton: {
    borderRadius: 30,
    backgroundColor: '#005CE6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
});
export default Register;
