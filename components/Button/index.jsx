import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style"
import { View } from "react-native-web";

export default function Button(props) {
    return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}