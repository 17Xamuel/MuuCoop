import React, {Component} from 'react';

import {View, Text} from 'react-native';

class MutualAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Mutual Account</Text>
        </View>
      </>
    );
  }
}

export default MutualAccount;
