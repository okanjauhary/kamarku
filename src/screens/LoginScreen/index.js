import React from 'react';
import { Container, Header, Content, Button, Text, Left, Right, Body, Title, Input, Form, Item, Label, Card, Toast } from 'native-base'
import { withNavigation } from 'react-navigation';
import { AsyncStorage, View } from 'react-native';
import axios from 'axios';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
    isCorrectUser: true,
    isCorrectPass: true,
    errMessage: '',
  }

  handleButtonPress(){
    if(this.state.email != '' && this.state.password != ''){
      let data = {email: this.state.email, password: this.state.password}
      axios.post('http://192.168.0.22:8000/api/login', data)
           .then(result => {
                  AsyncStorage.setItem('ACCESS_TOKEN', result.data.token)
                  this.props.navigation.navigate('Home')
           })
    }else{
      this.setState({
        isCorrectUser: false,
        isCorrectPass: false
      })
    }
  }

  render(){
    return (
      <Container>
         <Content>
             <Card transparent style={{padding: 10}}>
               <Text>{this.state.errMessage}</Text>
               <Form style={{marginBottom: 20}}>
                 <Item fixedLabel style={{borderBottomColor: this.state.isCorrectUser ? '#ddd' : 'red'}}>
                   <Label style={{color: this.state.isCorrectUser ? '#555' : 'red'}}>Email</Label>
                   <Input onChangeText={user => this.setState({email: user})} />
                 </Item>
                 <Item fixedLabel style={{borderBottomColor: this.state.isCorrectPass ? '#ddd' : 'red'}}>
                   <Label style={{color: this.state.isCorrectPass ? '#555' : 'red'}}>Password</Label>
                   <Input onChangeText={pass => this.setState({password: pass})} secureTextEntry={false}/>
                 </Item>
               </Form>
               <Button success block large onPress={() => this.handleButtonPress()}>
                  <Text>Login</Text>
               </Button>
             </Card>
         </Content>
      </Container>
    )
  }
}

export default withNavigation(LoginScreen)