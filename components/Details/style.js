import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#f5f5f5f5',
        borderWidth: 1,
        borderColor: '#3B426C'
    },
    containerText:{
        margin: 8
    },
    price: {
        color: 'orange'
    },
    text: {
        fontSize: 20
    },
    img: {
        marginLeft: 5,
        width: 50,
        height: 50
    },
    imgProd: {
        margin: 5
    }
})