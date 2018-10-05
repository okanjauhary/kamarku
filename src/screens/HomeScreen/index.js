import React from 'react';
import { connect } from 'react-redux'
import { 
  Container, 
  Header, 
  Button, 
  Icon, 
  Item, 
  Input, 
  Text, 
  Content,
  Card,
  CardItem,
  H3
} from 'native-base';

import { View, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { fetchRoom, getRoom } from '../../redux/actions/roomAct';

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
          header: null
    })

    componentWillMount = () => {
      this.props.dispatch(fetchRoom())
    }
    
    _renderItem = ({item}) => {
      let info = item.description.substring(0, 80)
      let infocSplited = info.split(' ')
      infocSplited.pop()
      let desc = infocSplited.join(" ")

      return (
          <Card style={{marginBottom: 20}} >
            <TouchableOpacity onPress={() => {
              this.props.dispatch(getRoom(item._id))
              this.props.navigation.navigate('Detail')
            }}>
              <CardItem cardBody style={{height: 250, position: 'relative'}}>
                <Image source={{uri: item.image}} style={{height: 250, width: '100%'}}/>
                <View style={styles.detailItem}>
                  <H3 style={{color: '#fff'}}>{item.name}</H3>
                  <Text style={{color: '#ddd', fontSize: 11}}>{item.address}</Text>
                  <Text style={{color: 'yellow', position: 'absolute', bottom: 20, right: 10}}>{item.price}</Text>
                </View>
              </CardItem>
            </TouchableOpacity> 
          </Card>
      )
    }

    render() {

        return (
          <Container >
            <Header searchBar rounded>
                <Item>
                  <Icon name="md-search" />
                  <Input placeholder="Search" />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
            </Header>
            <Content style={{padding: 5, backgroundColor: 'whitesmoke'}}>
              <FlatList
                data={this.props.roomData.rooms}
                keyExtractor={item => item._id}
                renderItem={this._renderItem}
              />
            </Content>
            
          </Container>
        )
    }
}

const styles = StyleSheet.create({
    detailItem: {
        position: 'absolute',
        width: '100%',
        zIndex: 99,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.4)',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        paddingTop: 20
    },
    header: {
      flexDirection: 'row'
    }
})

const mapStateToProps = (state) => ({
    roomData : state.roomData
})

export default connect(mapStateToProps)(HomeScreen)
