import { createContext, useState } from "react";

export const AuthContext = createContext({})

export function AuthProvider({ children }){
    const [user, setUser] = useState({
        email: "fellipe@gmail.com"
    })

    function login(email, senha){

        if(email == "fellipe@gmail.com" && senha == "123") {
            setUser({
                nome: "Fellipe",
                email
            })
            return "ok";
        } 
    
        return "E-mail ou senha inválidos";
        
    }

    function logout(){
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}