import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },

    cardProdutoFim: {
        display: 'flex',
        flexDirection: 'column',
    },

    img: {
        width: 50,
        height: 50,
    },

    valor: {
        color: 'green'
    },

    icons: {
        fontSize: 30
    }
})