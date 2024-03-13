import { StyleSheet, Text, View } from "react-native";
import Details from "../components/Details";

export default function Tela() {
    return (
        <View style={styles.container}>
            <Details product="Beef Burger" calories="70" price="12.00" img="https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg"/>
            <Details product="Macarrão" calories="371" price="15.00" img="https://renata.com.br/images/receitas/87/renata-imagem-receitas-macarrao-ao-molho-rustico-de-tomate-e-bacon-share.jpg"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfbff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 50,
    }
})