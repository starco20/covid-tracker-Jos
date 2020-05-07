import React from 'react';
import {View , Text , FlatList ,StyleSheet}from 'react-native';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[
                {
                    fid:11,
                    kodeProvi:31,
                    provinsi:"DKI Jakarta",
                    kasusPosi:4770,
                    kasusSemb:741,
                    kasusMeni:414
                },
                {
                    fid:12,
                    kodeProvi:32,
                    provinsi:"Jawa Barat",
                    kasusPosi:1320,
                    kasusSemb:177,
                    kasusMeni:90
                },
                {
                    fid:15,
                    kodeProvi:35,
                    provinsi:"Jawa Timur",
                    kasusPosi:1221,
                    kasusSemb:199,
                    kasusMeni:123
                },
                {
                    fid:13,
                    kodeProvi:33,
                    provinsi:"Jawa Tengah",
                    kasusPosi:891,
                    kasusSemb:145,
                    kasusMeni:64
                },
                {
                    fid:27,
                    kodeProvi:73,
                    provinsi:"Sulawesi Selatan",
                    kasusPosi:665,
                    kasusSemb:235,
                    kasusMeni:45
                },
                {
                    fid:16,
                    kodeProvi:36,
                    provinsi:"Banten",
                    kasusPosi:487,
                    kasusSemb:122,
                    kasusMeni:41
                },
                {
                    fid:18,
                    kodeProvi:52,
                    provinsi:"Nusa Tenggara Barat",
                    kasusPosi:289,
                    kasusSemb:53,
                    kasusMeni:5
                },
                {
                    fid:17,
                    kodeProvi:51,
                    provinsi:"Bali",
                    kasusPosi:277,
                    kasusSemb:166,
                    kasusMeni:4
                },
                {
                    fid:33,
                    kodeProvi:94,
                    provinsi:"Papua",
                    kasusPosi:248,
                    kasusSemb:48,
                    kasusMeni:6
                },
                {
                    fid:3,
                    kodeProvi:13,
                    provinsi:"Sumatera Barat",
                    kasusPosi:238,
                    kasusSemb:38,
                    kasusMeni:16
                },
                {
                    fid:22,
                    kodeProvi:63,
                    provinsi:"Kalimantan Selatan",
                    kasusPosi:225,
                    kasusSemb:24,
                    kasusMeni:9
                },
                {
                    fid:6,
                    kodeProvi:16,
                    provinsi:"Sumatera Selatan",
                    kasusPosi:210,
                    kasusSemb:47,
                    kasusMeni:5
                },
                {
                    fid:21,
                    kodeProvi:62,
                    provinsi:"Kalimantan Tengah",
                    kasusPosi:186,
                    kasusSemb:15,
                    kasusMeni:7
                },
                {
                    fid:23,
                    kodeProvi:64,
                    provinsi:"Kalimantan Timur",
                    kasusPosi:182,
                    kasusSemb:13,
                    kasusMeni:2
                },
                {
                    fid:2,
                    kodeProvi:12,
                    provinsi:"Sumatera Utara",
                    kasusPosi:141,
                    kasusSemb:43,
                    kasusMeni:16
                },
                {
                    fid:24,
                    kodeProvi:65,
                    provinsi:"Kalimantan Utara",
                    kasusPosi:131,
                    kasusSemb:6,
                    kasusMeni:1
                },
                {
                    fid:14,
                    kodeProvi:34,
                    provinsi:"Daerah Istimewa Yogyakarta",
                    kasusPosi:122,
                    kasusSemb:53,
                    kasusMeni:7
                },
                {
                    fid:10,
                    kodeProvi:21,
                    provinsi:"Kepulauan Riau",
                    kasusPosi:98,
                    kasusSemb:57,
                    kasusMeni:10
                },
                {
                    fid:20,
                    kodeProvi:61,
                    provinsi:"Kalimantan Barat",
                    kasusPosi:90,
                    kasusSemb:8,
                    kasusMeni:3
                },
                {
                    fid:26,
                    kodeProvi:72,
                    provinsi:"Sulawesi Tengah",
                    kasusPosi:70,
                    kasusSemb:12,
                    kasusMeni:3
                },
                {
                    fid:28,
                    kodeProvi:74,
                    provinsi:"Sulawesi Tenggara",
                    kasusPosi:69,
                    kasusSemb:15,
                    kasusMeni:2
                },
                {
                    fid:9,
                    kodeProvi:18,
                    provinsi:"Lampung",
                    kasusPosi:63,
                    kasusSemb:18,
                    kasusMeni:5
                },
                {
                    fid:4,
                    kodeProvi:14,
                    provinsi:"Riau",
                    kasusPosi:61,
                    kasusSemb:28,
                    kasusMeni:6
                },
                {
                    fid:30,
                    kodeProvi:76,
                    provinsi:"Sulawesi Barat",
                    kasusPosi:58,
                    kasusSemb:4,
                    kasusMeni:2
                },
                {
                    fid:34,
                    kodeProvi:91,
                    provinsi:"Papua Barat",
                    kasusPosi:53,
                    kasusSemb:0,
                    kasusMeni:1
                },
                {
                    fid:32,
                    kodeProvi:82,
                    provinsi:"Maluku Utara",
                    kasusPosi:50,
                    kasusSemb:5,
                    kasusMeni:0
                },
                {
                    fid:5,
                    kodeProvi:15,
                    provinsi:"Jambi",
                    kasusPosi:47,
                    kasusSemb:1,
                    kasusMeni:0
                },
                {
                    fid:25,
                    kodeProvi:71,
                    provinsi:"Sulawesi Utara",
                    kasusPosi:45,
                    kasusSemb:17,
                    kasusMeni:4
                },
                {
                    fid:31,
                    kodeProvi:81,
                    provinsi:"Maluku",
                    kasusPosi:23,
                    kasusSemb:12,
                    kasusMeni:0
                },
                {
                    fid:35,
                    kodeProvi:0,
                    provinsi:"Indonesia",
                    kasusPosi:22,
                    kasusSemb:0,
                    kasusMeni:0
                },
                {
                    fid:8,
                    kodeProvi:19,
                    provinsi:"Kepulauan Bangka Belitung",
                    kasusPosi:19,
                    kasusSemb:4,
                    kasusMeni:1
                },
                {
                    fid:1,
                    kodeProvi:11,
                    provinsi:"Aceh",
                    kasusPosi:17,
                    kasusSemb:7,
                    kasusMeni:1
                },
                {
                    fid:29,
                    kodeProvi:75,
                    provinsi:"Gorontalo",
                    kasusPosi:15,
                    kasusSemb:2,
                    kasusMeni:1
                },
                {
                    fid:7,
                    kodeProvi:17,
                    provinsi:"Bengkulu",
                    kasusPosi:14,
                    kasusSemb:1,
                    kasusMeni:1
                },
                {
                    fid:19,
                    kodeProvi:53,
                    provinsi:"Nusa Tenggara Timur",
                    kasusPosi:12,
                    kasusSemb:1,
                    kasusMeni:0
                },
            ],
            refreshing: false
        }
    }

    renderItem = ({item}) => (
        
        <View style={{ flex:1, padding: 20, borderBottomWidth: 1, borderBottomColor: '#000'}}>
           <View style={{ flexDirection:'row' }}>
                    <Text>{item.provinsi}</Text>
                </View>
           <View style={{ flexDirection:'row-reverse' }}>
                <Text style={styles.B3}>   {item.kasusMeni}   </Text>
                <Text style={styles.B2}>   {item.kasusSemb}   </Text>
                <Text style={styles.B1}>   {item.kasusPosi}   </Text>
            </View>    
        </View>)

    onRefresh = () => {
        this.state({refreshing: true});
    }

    
    render () {
        console.log(this.state.users);
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    keyExtractor={item => item.fid.toString()}    
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={()=> {}}
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