import React, { Component } from 'react';
 
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';
 
import { StackNavigator } from 'react-navigation';

class LoginActivity extends Component {
 
  // Setting up Login Activity title.
  static navigationOptions =
   {
      title: 'LoginActivity',
   };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
}
UserLoginFunction = () => {
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { Email: UserEmail });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
      render() {
    return (
 
<View style={styles.MainContainer}>
 
        <Text style= {styles.TextComponentStyle}>User Login Form</Text>
  
        <TextInput
          
          placeholder="Enter User Email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
          underlineColorAndroid='transparent'
         style={styles.TextInputStyleClass}
        />
 
        <TextInput
          placeholder="Enter User Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}

          secureTextEntry={true}
        />
 
        <Button title=" Login" onPress={this.UserLoginFunction} color="#2196F3" />
      
  
 
</View>
            
    );
  }