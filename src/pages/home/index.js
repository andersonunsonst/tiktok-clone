import {View, StyleSheet, Text} from 'react-native'

export function Home(){
    return(
        <View style={styles.container}>
            <Text>Pagina home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})