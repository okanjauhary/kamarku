import React from 'react';
import { connect } from 'react-redux'
import { 
  Container, 
  Header, 
  Button, 
  Icon, 
  Text, 
  Content,
  Left,
  Body,
  Right,
  Card,
  CardItem,
  H2
} from 'native-base';

import { Image, View, StyleSheet, ListView } from 'react-native'

class DetailScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
          tabBarIcon: <Icon name="home" />
    })
    
    render() {
        const item = this.props.roomData.room
        alert(JSON.stringify(item))
        return (
          <Container >
            <Header>
              <Left>
                  <Button transparent onPress={() => this.props.navigation.pop()}>
                    <Icon name="arrow-back" style={{color: '#fff'}}/>
                  </Button>
              </Left>
              <Body/>
              <Right />
            </Header>
            <Content>
                <View>
                    <Image source={{uri: item.image}} style={{height: 300}} />
                </View>
                <View style={{padding: 10}}>
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <H2 primary>{item.name}</H2>
                                <Text note>{item.address}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <Text>Description</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    {item.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>
            <Button success block large style={styles.btnOrder}>
              <Text>Pesan Sekarang</Text>
            </Button>
            <View style={{marginTop: 50}}></View>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
    btnOrder: {
        position: 'absolute',
        zIndex: 999,
        bottom: 0,
        borderRadius: 0,
        width: '100%'
    }
})

const mapStateToProps = (state) => ({
    roomData : state.roomData
})

export default connect(mapStateToProps)(DetailScreen)
