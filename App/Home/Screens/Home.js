import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-paper';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveInputCtr: false,
      loanInputCtr: false,
    };
  }
  render() {
    return (
      <>
        <View
          style={{flex: 1, backgroundColor: '#005CE6', position: 'relative'}}>
          <View style={styles.topCtr}>
            <View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <Image
                  source={require('../../Resources/place-holder.jpg')}
                  style={{height: 60, width: 60, borderRadius: 30}}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={{color: 'white', fontSize: 18.5}}>
                    Owobushobozi Derrick
                  </Text>
                  <Text style={{color: 'white'}}>Member Number: 31</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomCtr}>
            <View style={styles.bottom}>
              <View style={[styles.summuryCtr, styles.shadow]}>
                <Text style={{opacity: 0.5, fontSize: 13}}>MUU Coop</Text>
                <Text style={{fontSize: 16}}>Savings</Text>
                <Text style={{fontSize: 16}}>Loans</Text>
                <Text style={{fontSize: 16}}>Mutuals</Text>
              </View>
              <View style={styles.saveAndLoansCtr}>
                <View style={styles.saveCtr}>
                  <View
                    style={[
                      {
                        flex: 1.5,
                        backgroundColor: 'white',
                        marginRight: 5,
                        borderRadius: 5,
                        justifyContent: 'space-around',
                        paddingLeft: 15,
                      },
                      styles.shadow,
                    ]}>
                    <FontAwesome5 name="wallet" size={40} color="#000" />
                    <View>
                      <Text style={{fontSize: 13}}>My Savings</Text>
                      <Text style={{fontSize: 18.5, fontWeight: 'bold'}}>
                        UGX 5000
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1.5,
                      marginLeft: 5,
                      justifyContent: 'space-around',
                      paddingLeft: 20,
                    }}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Model Uganda Cooperation
                    </Text>
                    <Text>Members: 35</Text>
                    <Text>Members: 35</Text>
                    <Text>Mutual Loans: 3</Text>
                    <Text>Personal Loans: 5</Text>
                  </View>
                </View>
                <View style={styles.loansCtr}>
                  <View
                    style={{
                      flex: 2,
                      marginRight: 5,
                    }}>
                    <View
                      style={[
                        {
                          flex: 1,
                          marginBottom: 2.5,
                          borderRadius: 5,
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          alignItems: 'center',
                        },
                        styles.shadow,
                      ]}>
                      <View>
                        <Text style={{fontSize: 12}}>Total Savings</Text>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                          UGX 6,780,000
                        </Text>
                      </View>
                      <FontAwesome5 name="wallet" size={25} color="#000" />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 2.5,
                        borderRadius: 5,
                        justifyContent: 'space-around',
                      }}>
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            paddingLeft: 25,
                          }}>
                          Actions
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                          style={[styles.stepButton]}
                          onPress={() => {
                            this.setState({
                              ...this.state,
                              saveInputCtr: true,
                            });
                          }}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#fff',
                            }}>
                            Save
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[styles.stepButton]}
                          onPress={() => {
                            this.setState({
                              ...this.state,
                              loanInputCtr: true,
                            });
                          }}>
                          <Text
                            style={{
                              fontSize: 13,
                              color: '#fff',
                            }}>
                            Get a Loan
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      {
                        flex: 1.5,
                        marginLeft: 5,
                        borderRadius: 5,
                        justifyContent: 'space-around',
                        paddingLeft: 15,
                      },
                      styles.shadow,
                    ]}>
                    <FontAwesome5
                      name="money-check-alt"
                      size={30}
                      color="#000"
                    />
                    <View>
                      <Text style={{fontSize: 13}}>Total Loan Balance</Text>
                      <Text style={{fontSize: 18.5, fontWeight: 'bold'}}>
                        UGX 1500
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.login,
              {
                display:
                  this.state.saveInputCtr || this.state.loanInputCtr
                    ? 'flex'
                    : 'none',
              },
            ]}
            animation="fadeInUpBig">
            <View style={{position: 'absolute', left: 5, top: 5}}>
              <FontAwesome5
                name="times"
                size={15}
                onPress={() => {
                  this.setState({
                    ...this.state,
                    saveInputCtr: false,
                    loanInputCtr: false,
                  });
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {this.state.saveInputCtr ? 'Make A Saving' : ''}
                {this.state.loanInputCtr ? 'Loan Request Details' : ''}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input_ctr}
                label="Transaction Amount"
                mode="outlined"
                onChangeText={e => {
                  this.setState({...this.state, amount: e});
                }}
                right={
                  <TextInput.Icon
                    name={this.state.passwordVisible ? 'eye-off' : 'eye'}
                  />
                }
              />
              <TextInput
                style={styles.input_ctr}
                label="Mobile Number"
                mode="outlined"
                onChangeText={e => {
                  this.setState({...this.state, number: e});
                }}
                right={
                  <TextInput.Icon
                    name={this.state.passwordVisible ? 'eye-off' : 'eye'}
                  />
                }
              />
            </View>
            <TouchableOpacity style={styles.stepButton}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  paddingBottom: 5,
                  marginRight: 15,
                }}>
                {this.state.saveInputCtr ? 'Save' : ''}
                {this.state.loanInputCtr ? 'Send Loan Request' : ''}
              </Text>
              <Feather name="chevron-right" size={18} color="#fff" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}></View>
          </View>
        </View>
      </>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  topCtr: {
    flex: 1,
    marginHorizontal: 25,
  },
  bottomCtr: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottom: {
    marginHorizontal: 25,
    borderRadius: 10,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    top: -30,
  },
  summuryCtr: {
    flex: 0.8,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
  },
  saveAndLoansCtr: {
    flex: 4.5,
    marginVertical: 5,
  },
  saveCtr: {
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
  },
  input_ctr: {
    marginBottom: 32,
    marginTop: 10,
  },
  login: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 32,
    zIndex: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  loansCtr: {
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
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
  shadow: {
    shadowColor: 'rgba(0,0,0,0.5)',
    // shadowOffset: {width: 1, height: 1},
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 2.5,
  },
});
