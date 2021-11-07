import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
  ToastAndroid,
  BackHandler,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import * as Linking from "expo-linking";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.ctr}>
          <View style={styles.titleCtr}>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: '#fff',
                  paddingVertical: 3,
                }}>
                MUU Coop
              </Text>
              <Text style={{fontSize: 14, color: '#fff'}}>Help Links</Text>
            </View>
          </View>
          <View style={styles.linksCtr}>
            {/* <View style={styles.link}>
              <Feather name="user-plus" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                   
                }}>
                Register A another member
              </Text>
            </View> */}
            <View style={styles.link}>
              <Feather name="external-link" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://muucoop.herokuapp.com');
                }}>
                Visit Website
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="link-2" size={24} color="#000" />

              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://muucoop.herokuapp.com');
                }}>
                Contact Us
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="user-x" size={24} color="#000" />

              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://muucoop.herokuapp.com');
                }}>
                Report Fraud
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="airplay" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                  Linking.openURL('https://muucoop.herokuapp.com');
                }}>
                Market A Product/Service
              </Text>
            </View>
            <View style={styles.link}>
              <Feather name="log-out" size={24} color="#000" />
              <Text
                style={styles.linkText}
                onPress={() => {
                  Alert.alert(
                    'Log Out',
                    'Press ok to continue otherwise Cancel',
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'Ok',
                        onPress: async () => {
                          await AsyncStorage.removeItem('user', err => {
                            if (err) {
                              ToastAndroid.show(
                                'Error in loggin you out',
                                ToastAndroid.LONG,
                              );
                            } else {
                              BackHandler.exitApp();
                            }
                          });
                        },
                      },
                    ],
                  );
                }}>
                Log Out
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
  },
  titleCtr: {
    flex: 1,
    backgroundColor: '#0053FF',
    justifyContent: 'center',
    paddingLeft: 25,
  },
  linksCtr: {
    flex: 2,
  },
  link: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  linkText: {
    marginHorizontal: 15,
    paddingTop: 3,
    fontSize: 14,
  },
});
export default Help;
