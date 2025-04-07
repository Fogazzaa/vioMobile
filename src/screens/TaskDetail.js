import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TaskDetail({ route }) {
  const { task } = route.params;
  return (
    <View style={styles.container}>
      <Text>Detalhes da Tarefa</Text>
      <Text style={styles.taskTitle} >Título: {task.title}</Text>
      <Text style={styles.taskDetails}>Data: {task.date}</Text>
      <Text style={styles.taskDetails}>Hora: {task.time}</Text>
      <Text style={styles.taskDetails}>Endereço: {task.adress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskDetails: {
    fontSize: 18,
    marginBottom: 5,
  },
});
