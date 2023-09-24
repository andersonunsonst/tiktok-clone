import {View, StyleSheet, Text} from 'react-native'
import {Entypo} from '@expo/vector-icons'

export function ButtonNew({size}){
    return(
        <View style={styles.container}>
            <Entypo style={styles.inner} name="plus" size={size} color='#000'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderLeftWidth:4,
        borderLeftColor:'#1ebfc7',
        borderRightWidth:4,
        borderRightColor:'#f43071',
        borderRadius:6
    },
    inner:{
        backgroundColor:'#fff',
        padding:1,
        paddingLeft:6,
        paddingRight:6,
        borderRadius:3
    }
})