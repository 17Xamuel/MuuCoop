import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#005CE6'}}>
          <View style={styles.topCtr}></View>
          <View style={styles.bottomCtr}>
            <View style={styles.bottom}>
              <View style={styles.summuryCtr}>
                <Text>Styling</Text>
              </View>
              <View style={styles.saveAndLoansCtr}>
                <View style={styles.saveCtr}>
                  <View style={styles.saveLeft}>
                    <Text>Styling</Text>
                  </View>
                  <View style={styles.saveRight}></View>
                </View>
                <View style={styles.loansCtr}></View>
              </View>
            </View>
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
  },
  bottomCtr: {
    flex: 2.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // position: 'relative',
  },
  bottom: {
    marginHorizontal: 25,
    borderRadius: 10,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    top: -20,
  },
  summuryCtr: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  saveAndLoansCtr: {
    flex: 3,
    marginVertical: 5,
  },
  saveCtr: {
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  loansCtr: {
    backgroundColor: 'black',
    flex: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});
