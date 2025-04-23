import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../services/axios";
import {useNavigation} from "@react-navigation/native"

export default function Cadastro() {
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    data_nascimento: "",
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  async function handleCadastro() {
    await api.postCadastro(user).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
        console.log(error);
      }
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={user.name}
        onChangeText={(value) => {
          setUser({ ...user, name: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        value={user.email}
        onChangeText={(value) => {
          setUser({ ...user, email: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="CPF"
        value={user.cpf}
        onChangeText={(value) => {
          setUser({ ...user, cpf: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Data de Nascimento"
        value={user.data_nascimento}
        onChangeText={(value) => {
          setUser({ ...user, data_nascimento: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={user.password}
        onChangeText={(value) => {
          setUser({ ...user, password: value });
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleCadastro} style={styles.button}>
        <Text style={styles.button}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    width:"100%"
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
