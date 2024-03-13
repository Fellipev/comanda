import { Image, Text, View } from "react-native";
import { styles } from "./style";

export default function Details(props){
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>{props.product}</Text>
                <Text style={styles.text}>{props.calories} Calories</Text>
                <Text style={styles.price}>${props.price}</Text>
            </View>
            <View style={styles.imgProd}>
            <Image 
                style={styles.img} 
                source={{ uri: props.img }}/>
            </View>
        </View>
    );
}