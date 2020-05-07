import React from 'react';
import {View , Text , FlatList, Image}from 'react-native';

class TList extends React.Component {
    constructor() {
        super();
        this.state = {
            prov:[],
            refreshing: false
        }
    }

    renderItem = ({item}) => (
        <View style={{ flex:1, flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <View>
                <Text>: {item.provinsi}</Text>
                <Text>: {item.kasusPosi}</Text>
                <Text>: {item.kasusSemb}</Text>
                <Text>: {item.kasusMeni}</Text>
            </View>
        </View>)

    onRefresh = () => {
        this.getDataAPI();
    }

    componentDidMount = () => {
        this.getDataAPI();
    }

    getDataAPI = async () => {
        this.setState({ refreshing: true})
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => this.setState({users: json ,refreshing: false}))
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
        const json = await response.json();
        this.setState({users: json ,refreshing: false})
    }
    
    render () {
        console.log(this.state.users);
        return (
            <View>
                <FlatList
                    data={this.state.prov}
                    keyExtractor={item => item.fid.toString()}    
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {}}
                />
            </View>
        )
    }
}
export default TList;