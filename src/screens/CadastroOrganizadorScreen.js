import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import api from "../axios/axios";

export default function CadastroOrganizador({ navigation }) {
  const [organizador, setOrganizador] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  async function handleOrganizador() {
    await api.postOrganizador(organizador).then(
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
      <Text style={styles.title}>Faça Cadastro de um Organizador</Text>
      <TextInput
        placeholder="Nome"
        value={organizador.nome}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, nome: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        value={organizador.email}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, email: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={organizador.telefone}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, telefone: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={organizador.senha}
        onChangeText={(value) => {
          setOrganizador({ ...organizador, senha: value });
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleOrganizador} style={styles.button}>
        <Text style={styles.button}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.button}>Home</Text>
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
