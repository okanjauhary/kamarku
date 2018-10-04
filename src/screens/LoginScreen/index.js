import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
          tabBarIcon: <Icon name="person" />
    })

    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Login</Title>
              </Body>
              <Right />
            </Header>

          </Container>
        )
    }
}

export default HomeScreen
