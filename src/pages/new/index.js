import {View, StyleSheet, Text} from 'react-native'

export function New(){
    return(
        <View style={styles.container}>
            <Text>Pagina cadastrar video novo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})