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
  // post = async () => {
  //   ToastAndroid.show('Please Wait...', ToastAndroid.SHORT);
  //   if (this.state.username === '' || this.state.password === '') {
  //     ToastAndroid.show('All Fields are Required...', ToastAndroid.LONG);
  //     return;
  //   }
  //   let data = {
  //     username: this.state.member_number,
  //     password: this.state.password,
  //   };
  //   let api = new FormsApi();
  //   let res = await api.post(`/user/student/login`, data);
  //   if (res !== 'Error') {
  //     if (res.data === 'Error') {
  //       ToastAndroid.show('An Error Occured', ToastAndroid.LONG);
  //     } else if (res.data === 'Wrong_details') {
  //       ToastAndroid.show('Wrong Username or Password', ToastAndroid.LONG);
  //     } else {
  //       ToastAndroid.show('Success, Redirecting...', ToastAndroid.LONG);
  //       await AsyncStorage.setItem('user', JSON.stringify(res), error => {
  //         if (error) {
  //           Alert.alert('Error', 'An Error Occured, Start The App Again', [
  //             {
  //               text: 'Exit',
  //               onPress: () => {
  //                 BackHandler.exitApp();
  //               },
  //             },
  //           ]);
  //         } else {
  //           this.props.navigation.navigate('Drawer');
  //         }
  //       });
  //     }
  //   } else {
  //     ToastAndroid.show(
  //       'An Error Occured, Check Your Internet...',
  //       ToastAndroid.LONG,
  //     );
  //   }
  // };
  render() {
    if (this.state.activeTab === 0) {
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
              MUU Coop - Registration
            </Text>
          </Animatable.View>
          <Animatable.View style={styles.login} animation="fadeInUpBig">
            <View>
              <TextInput
                style={styles.input_ctr}
                label="Surname"
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, surname: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
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
                this.setState({
                  ...this.state,
                  activeTab: this.state.activeTab + 1,
                });
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
                fontSize: 40,
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
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, phone: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
                label="Email"
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
                  this.setState({
                    ...this.state,
                    activeTab: this.state.activeTab + 1,
                  });
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
                fontSize: 40,
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
                mode="outlined"
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, next_of_kin: e});
                }}
              />
              <TextInput
                style={styles.input_ctr}
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
                  this.setState({
                    ...this.state,
                    activeTab: this.state.activeTab + 1,
                  });
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
                fontSize: 40,
                fontWeight: 'bold',
                color: '#fff',
                paddingHorizontal: 20,
              }}>
              Your Location
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
                right={<TextInput.Icon name="account-circle-outline" />}
                onChangeText={e => {
                  this.setState({...this.state, mbr_location: e});
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
              <TouchableOpacity
                style={styles.stepButton}
                onPress={() => {
                  this.props.navigation.navigate('BottomTabs');
                }}>
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
