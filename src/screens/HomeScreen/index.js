import React from 'react';
import { Container, Header, Button, Icon, Item, Input, Text, Content } from 'native-base';
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
          tabBarIcon: <Icon name="home" />
    })

    render() {
        return (
          <Container>
            <Header searchBar rounded>
                <Item>
                  <Icon name="md-search" />
                  <Input placeholder="Search" />
                  <Icon name="md-home" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
            </Header>
            <Content>
              <Text>{this.props.roomData.rooms[0]}</Text>
            </Content>
          </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    roomData : state.roomData
})

export default connect(mapStateToProps)(HomeScreen)
