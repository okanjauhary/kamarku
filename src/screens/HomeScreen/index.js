import React from 'react';
import { Container, Header, Button, Icon, Item, Input, Text, Content } from 'native-base';
import { connect } from 'react-redux'
import { fetchRoom } from '../../redux/actions/roomAct';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
          tabBarIcon: <Icon name="home" />
    })

    componentWillMount = () => {
      this.props.dispatch(fetchRoom())
    }
    

    render() {
        console.log("data dari component", this.props.roomData)
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
              <Text>OK</Text>
            </Content>
          </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    roomData : state.roomData
})

export default connect(mapStateToProps)(HomeScreen)
