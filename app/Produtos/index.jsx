import { View, ScrollView, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import CardProduto from "../../components/CardProduto";
import { styles } from './style';
import axios from 'axios';
import { useEffect, useState } from "react";

const produto = {
    "id": 1,
    "nome": "Bolo de Chocolate",
    "imagePath": "https://imgs.search.brave.com/ck5bRMhnCtlPWoAiJcP6IXC5L8sPQqejmStgLVl_k7o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wdWJp/bWcuYmFuZC51b2wu/Y29tLmJyL2ZpbGVz/L2JlZDdhODU5YTA3/NmZiM2ZiOTYwLmpw/Zw",
    "preco": 12
}


export default function Produtos({ navigation }) {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/produtos')
        .then(function (response) {

            console.log(response);
            console.log("HELLO")
            setProdutos(response.data);
            
        })

    }, [])

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

            <Text>PRODUTOS </Text>
            <ScrollView>
                {produtos.map(produto => <CardProduto key={produto.id} produto={produto} />)} 
                <CardProduto produto={produto}/>
            </ScrollView>
        </View>
    )
}