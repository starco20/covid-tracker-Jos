import React from 'react';
import {View , Text , FlatList ,StyleSheet}from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            province:[],
            refreshing:false
        }
}

renderItem = ({ item }) => (
    <View style={{ flex:1, padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
           <View style={{ flexDirection:'row' }}>
                    <Text>{item.provinsi}</Text>
                </View>
           <View style={{ flexDirection:'row-reverse' }}>
                <Text style={styles.B3}>   {item.kasusMeni}   </Text>
                <Text style={styles.B2}>   {item.kasusSemb}   </Text>
                <Text style={styles.B1}>   {item.kasusPosi}   </Text>
            </View>    
        </View>
)

onRefresh = () => {
    this.getDataApi();
}

componentDidMount = () => {
    this.getDataApi();
}

getDataApi = async () => {
    this.setState({refreshing:true})
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        const json = await response.json()
        this.setState({province: json.data,refreshing:false})
}

render(){
        console.log(this.state.users);
        return(
            <View>
                <FlatList
                    data={this.state.province}
                    keyExtractor={({provinsi}, index) => provinsi}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={()=> { }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    B1: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        borderWidth: 1,
        height: 45,
        width:'auto',
        backgroundColor: 'gold'
    },
    B2: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        borderWidth: 1,
        height:45,
        width:'auto',
        backgroundColor: 'springgreen'
    },
    B3: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        borderRadius:10,
        borderWidth: 1,
        height:45,
        width:'auto',
        backgroundColor: 'tomato'
    },
})
export default List;