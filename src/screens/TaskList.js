import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TaskList({ navigation }) {

  const tasks = [
    {
      id: 1,
      title: "Comprar Leite",
      date: "2025-04-27",
      time: "10:00",
      adress: "Supermercado",
    },
    {
      id: 2,
      title: "Comprar Pão",
      date: "2025-04-27",
      time: "10:00",
      adress: "Padaria",
    },
    {
      id: 3,
      title: "Comprar Frutas",
      date: "2025-04-27",
      time: "10:00",
      adress: "Feira",
    },
    {
      id: 4,
      title: "Comprar Verduras",
      date: "2025-04-27",
      time: "10:00",
      adress: "Mercado",
    },
    {
      id: 5,
      title: "Comprar Legumes",
      date: "2025-04-27",
      time: "10:00",
      adress: "Hortifruti",
    },
    {
      id: 6,
      title: "Comprar Bebidas",
      date: "2025-04-27",
      time: "10:00",
      adress: "Distribuidora",
    },
    {
      id: 7,
      title: "Comprar Doces",
      date: "2025-04-27",
      time: "10:00",
      adress: "Confeitaria",
    },
    {
      id: 8,
      title: "Comprar Carnes",
      date: "2025-04-27",
      time: "10:00",
      adress: "Açougue",
    },
    {
      id: 9,
      title: "Comprar Peixes",
      date: "2025-04-27",
      time: "10:00",
      adress: "Peixaria",
    },
    {
      id: 10,
      title: "Comprar Frutos do Mar",
      date: "2025-04-27",
      time: "10:00",
      adress: "Mercado",
    },
  ];

  handleTaskPress = (task) => {
    navigation.navigate("TaskDetail", { task });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemCard}
            onPress={() => handleTaskPress(item)}
          >
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text>{item.date}</Text>
            <Text>{item.time}</Text>
            <Text>{item.adress}</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  itemCard: {
    paddingVertical: 20,
    paddingHorizontal: 80,
    marginVertical: 16,
    backgroundColor: "gray",
    border: "1px solid black",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
