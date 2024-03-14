import { Text, View, Image, Touchable } from "react-native";
import { styles } from './style';
import { TouchableOpacity } from "react-native-web";

export default function CardProduto({ produto }) {
    
    return (
        <View style={styles.pedidos}>

            <View style={styles.CardProduto}>
                <Image style={styles.img} source={{ uri: produto.imagePath}}/>

                <View style={styles.produtoData}>
                    <Text>{produto.nome}</Text>
                    <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity>
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>0</Text>
                    <TouchableOpacity>
                        <Text style={styles.sprinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}