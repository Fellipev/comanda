import { Image, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Button from "../../components/Button";
import Input from "../../components/Input";
import { styles } from "./style";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

// import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }){
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        if(login(email, senha) === "ok"){
            setError("");
            navigation.navigate('Comanda');
        } else {
            setError("Acesso negado.");
        }
    }


    return(
        <View style={styles.container}>
            <Image 
                style={styles.img} 
                source={{
                uri: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saudável-que-nada-brasileiro-gosta-de-fast-food.jpg?fit=1600%2C1067&ssl=1',
              }}/>
      
            <Text>Sistema</Text>
            <Text style={styles.title}>comanda</Text>
            <Input placeholder='e-mail' value={email} onChangeText={setEmail}/>
            <Input placeholder='senha' secureTextEntry value={senha} onChangeText={setSenha}/>
            
            {/* My button's component! */}
            <Button onPress={handleLogin}>entrar</Button>
            <Text>{error}</Text>
            <StatusBar style="auto" />
        </View>
    )
}