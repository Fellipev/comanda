import { Text, View, Image } from "react-native";
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

export default function CardProtudo(props) {
    return (
        <View style={styles.container}>
            <View style={styles.cardProdutoInicio}>
                <Image
                    style={styles.img}
                    source={{
                        uri: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saudável-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
                    }} />
                <Text style={styles.valor}>R$ {props.valor}</Text>
            </View>
            <View style={styles.cardProdutoFim}>
                <Ionicons style={styles.icons} name="add-circle-outline"></Ionicons>
                <Ionicons style={styles.icons} name="remove-circle-outline"></Ionicons>
            </View>
        </View>
    )
}