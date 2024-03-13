import { Image, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Button from "../../components/Button";
import { styles } from "./style";
// import { Ionicons } from '@expo/vector-icons';

export default function Login(){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.img} 
                source={{
                uri: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saudável-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
              }}/>
      
            <Text>Sistema</Text>
            <Text style={styles.title}>comanda</Text>
            <Input placeholder='e-mail'/>
            <Input placeholder='senha' secureTextEntry/>
            
            {/* My button's component! */}
            <Button>entrar</Button>
            <StatusBar style="auto" />
        </View>
    )
}