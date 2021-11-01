import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  BackHandler,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Image,
  StatusBar,
} from 'react-native';

//storage
import AsyncStorage from '@react-native-async-storage/async-storage';

//start stacks
import StartStack from './App/Start/StartStack';
import HomeStack from './App/Home/bottomTabs';
import {NavigationContainer} from '@react-navigation/native';

//animated
import * as Animatable from 'react-native-animatable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {start: null};

    this.loData();
  }

  loData = () => {
    setTimeout(async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          this.setState({...this.state, start: 'user'});
        } else {
          this.setState({...this.state, start: 'user_null'});
        }
      } catch (error) {
        if (error) {
          Alert.alert(
            'App Crash',
            'Your App Crashed Due to initialization Error, Try Unistalling and Install Again',
            [
              {
                text: 'Ok',
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
            ],
          );
        }
      }
    }, 3000);
  };
  render() {
    if (this.state.start === null) {
      return <Splash />;
    }
    return <AppContent start={this.state.start} />;
  }
}

//content
const AppContent = ({start}) => {
  if (start === 'user') {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#005CE6" />
        <StartStack />
      </NavigationContainer>
    );
  }
};

//holds splash screen
const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animatable.View style={{margin: 2}} animation="fadeInRight">
        <Image
          source={require('./App/Resources/muuc_logo.png')}
          style={{height: 150, width: 150}}
        />
      </Animatable.View>
      <Animatable.View animation="fadeInLeft" style={{position: 'relative'}}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Model Uganda
        </Text>
      </Animatable.View>
    </View>
  );
};

export default App;
