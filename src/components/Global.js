import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Global = () => {
    return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around'}}>
                <View style={styles.B1}>
                    <Text style={{textAlign:'center'}}>
                        Positif
                            <Text style={{ fontWeight:'bold' }}>{"\n \n"}3784085</Text>
                    </Text>
                </View>
                <View style={styles.B2}>
                    <Text style={{textAlign:'center'}}>
                        Cure
                            <Text style={{ fontWeight:'bold' }}>{"\n \n"}1255685</Text>
                    </Text>
                </View>
                <View style={styles.B3}>
                    <Text style={{textAlign:'center'}} >
                        Dead
                        <Text style={{ fontWeight:'bold' }}>{"\n \n"}264679</Text>
                    </Text>
                </View>
            </View>
            
    )
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
        height: 100,
        width:100,
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
        height:100,
        width:100,
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
        height:100,
        width:100,
        backgroundColor: 'tomato'
    },
})

export default Global;