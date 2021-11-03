import React, {Component} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ToastAndroid,
} from 'react-native';

//input ctr
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

class MutualAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {loanInputCtr: false, select: false};
  }

  renderItem = () => <MutualLoan />;

  render() {
    return (
      <>
        <View style={{flex: 1}}>
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
                  <Text style={{color: 'white', fontSize: 15}}>
                    Owobushobozi Derrick
                  </Text>
                  <Text style={{color: 'white'}}>Member Number: 31</Text>
                </View>
              </View>
              <View>
                <Text
                  style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
                  Mutual Loans
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.setState({
                      ...this.state,
                      loanInputCtr: true,
                    });
                  }}>
                  <Text>Get A Loan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomCtr}>
            <View style={{marginHorizontal: 20, marginVertical: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 18.5}}>
                My Mutual Loans
              </Text>
            </View>
            <View>
              <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingBottom: 40}}
              />
            </View>
          </View>
          <View
            style={[
              styles.login,
              {
                display: this.state.loanInputCtr ? 'flex' : 'none',
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
                    loanInputCtr: false,
                  });
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                {this.state.loanInputCtr ? 'Mutual Loan Request' : ''}
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
              <DropDown
                label={'Colors'}
                mode={'outlined'}
                visible={this.state.select}
                showDropDown={() => {
                  this.setState({...this.state, select: true});
                }}
                onDismiss={() => {
                  this.setState({...this.state, select: false});
                }}
                // value={colors}
                // setValue={setColors}
                list={colorList}
                multiSelect
              />
            </View>
            <TouchableOpacity style={styles.buttonNoWidth}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#fff',
                  paddingBottom: 5,
                  marginRight: 15,
                }}>
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

export default MutualAccount;

const styles = StyleSheet.create({
  bottomCtr: {
    flex: 2,
  },
  button: {
    width: Dimensions.get('screen').width * 0.32,
    borderRadius: 30,
    backgroundColor: '#9f9f9f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  buttonNoWidth: {
    borderRadius: 30,
    backgroundColor: '#005CE6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 15,
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
  topCtr: {
    flex: 1,
    backgroundColor: '#005CE6',
    paddingHorizontal: 25,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

//for dropdown
const colorList = [
  {
    label: 'White',
    value: 'white',
  },
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
];
//flatlist component
const DATA = [
  {
    id: '1',
    user: 'Xamuel',
  },
  {
    id: '2',
    user: 'Xamuel2',
  },
  {
    id: '3',
    user: 'Xamuel3',
  },
  {
    id: '4',
    user: 'Xamuel3',
  },
  {
    id: '5',
    user: 'Xamuel3',
  },
  {
    id: '6',
    user: 'Xamuel3',
  },
];
function MutualLoan() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        paddingVertical: 10,
      }}>
      <View>
        <Text>Loan Amount: 50000</Text>
        <Text>Paid: 30000</Text>
        <Text>Balance: 20000</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ToastAndroid.show('App in Beta Version', ToastAndroid.LONG);
          }}>
          <Text>Details</Text>
        </TouchableOpacity>
        <View>
          <Text>Guarantors: 30,4,8</Text>
        </View>
      </View>
    </View>
  );
}
