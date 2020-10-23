import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    viewContainer: {
        margin: 20,
        paddingTop: 10,
    },
    
    headerText: {
        color: 'black',
        paddingBottom: 10,
        fontSize:24,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    subTitle: {
        paddingBottom: 20,
        padding: 5,
        fontWeight:'bold',
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        paddingTop: 10,
    },
    profileText:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '55%',
        borderWidth : 1,
        borderRadius: 5,
    }

})
