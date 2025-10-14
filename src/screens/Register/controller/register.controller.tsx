import { useState } from "react";
import { Alert } from "react-native";
import Register from "../view/register.view";
import api from "../../../services/api";

export default function RegisterController({ navigation }: any) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleRegister = async () => {
		if (!name || !email || !password || !confirmPassword) {
			Alert.alert("Por favor, preencha todos os campos.");
			return;
		}

		if (password !== confirmPassword) {
			Alert.alert("As senhas não coincidem.");
			return;
		}

		try {
			const response = await api.post("/auth/register", {
				name,
				email,
				password,
			});

			if (response.status === 201 || response.status === 200) {
				Alert.alert("Sucesso!", "Cadastro realizado com sucesso.");
				navigation.navigate("Login");
			} else {
				Alert.alert("Erro", "Não foi possível cadastrar. Tente novamente.");
			}
		} catch (error: any) {
			console.error("Falha no cadastro:", error);
			const message = error?.response?.data?.message ||
				error?.message ||
				"Não foi possível realizar o cadastro.";
			Alert.alert("Erro", message);
		}
	};

	return (
		<Register
			navigation={navigation}
			name={name}
			email={email}
			password={password}
			confirmPassword={confirmPassword}
			setName={setName}
			setEmail={setEmail}
			setPassword={setPassword}
			setConfirmPassword={setConfirmPassword}
			handleRegister={handleRegister}
		/>
	);
}
