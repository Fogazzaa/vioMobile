import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";

export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Button title="Cadastro de Eventos" onPress={() => navigation.navigate("CadastroEvento")}/>
      <Button title="Cadastro de Ingressos" onPress={() => navigation.navigate("CadastroIngresso")}/>
      <Button title="Cadastro de Organizadores" onPress={() => navigation.navigate("CadastroOrganizador")}/>
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
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    width: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
