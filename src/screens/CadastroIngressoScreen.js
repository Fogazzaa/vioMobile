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
import api from "../axios/axios";

export default function CadastroIngresso({ navigation }) {
  const [ingresso, setIngresso] = useState({
    preco: "",
    tipo: "",
    fk_id_evento: "",
  });

  async function handleIngresso() {
    await api.postIngresso(ingresso).then(
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
      <Text style={styles.title}>Faça Cadastro de um Ingresso</Text>
      <TextInput
        placeholder="Preço"
        value={ingresso.preco}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, preco: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Tipo"
        value={ingresso.tipo}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, tipo: value });
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="ID do Evento"
        value={ingresso.fk_id_evento}
        onChangeText={(value) => {
          setIngresso({ ...ingresso, fk_id_evento: value });
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleIngresso} style={styles.button}>
        <Text style={styles.button}>Cadastrar</Text>
      </TouchableOpacity>
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      />
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
    backgroundColor: "gray",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
