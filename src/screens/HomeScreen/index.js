import React from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
          tabBarIcon: <Icon name="home" />
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
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
          </Container>
        )
    }
}

export default HomeScreen
