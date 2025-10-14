import { useState } from "react";
import Login from "../view/login.view";

export default function LoginController({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email: ', email, 'Senha: ', password);
    }

    return (
        <Login 
            navigation={navigation}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            handleLogin={handleLogin}
        />
    )
}