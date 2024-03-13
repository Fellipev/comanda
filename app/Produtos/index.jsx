import { View, ScrollView, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import CardProtudo from "../../components/CardProduto";
import { styles } from './style';

const produto = {
    "id": 1,
    "nome": "Bolo de Chocolate",
    "imagemPath": "",
    "preco": 12
}

export default function Produtos() {
    return (
        <View style={styles.container}>
            <View>
                <MaterialIcons name="arrow-back" size={24} color="black" />

                <View>
                    <Text>comanda</Text>
                    <Text>2457</Text>
                </View>
            </View>

            <View>
                <Text>Pedido</Text>
                <View>
                    <Text>Saldo da comanda</Text>
                    <Text>0,00</Text>
                </View>
                <View>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <Text></Text>
            <ScrollView>
                <CardProtudo/>
            </ScrollView>
        </View>
    )
}