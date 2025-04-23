import { useEffect, useState } from "react";
import api from "../services/axios";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  ActivityIndicator,
} from "react-native";

export default function Eventos({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [ingressos, setIngressos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [eventoSelecionado, setEventoSelecionado] = useState("");

  useEffect(() => {
    getEventos();
  }, []);

  async function getEventos() {
    try {
      const response = await api.getEventos("/eventos");
      setEventos(response.data.eventos);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar eventos:", error.response.data.error);
    }
  }

  async function abrirModalComIngressos(evento) {
    setEventoSelecionado(evento);
    setModalVisible(true);

    try {
      const response = await api.getIngressosPorEvento(evento.id_evento);
      setIngressos(response.data.ingressos);
    } catch (error) {
      console.log("Erro ao buscar ingressos", error.response);
    }
  }

  return (
    <View style={styles.container}>
            <Text style={styles.title}>Eventos Disponíveis</Text>     {" "}
      {loading ? (
        <ActivityIndicator size="large" color="gray" />
      ) : (
        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id_evento.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.eventCard}
              onPress={() => {
                abrirModalComIngressos(item);
              }}
            >
                            <Text style={styles.eventName}>{item.nome}</Text>   
                        <Text style={styles.eventLocal}>{item.local}</Text>     
                     {" "}
              <Text style={styles.eventDate}>
                {new Date(item.data_hora).toLocaleString()}
              </Text>
                         {" "}
            </TouchableOpacity>
          )}
        />
      )}
           {" "}
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
               {" "}
        <View style={styles.modalContainer}>
                   {" "}
          <Text style={styles.modalTitle}>
            Ingressos para: {eventoSelecionado.nome}
          </Text>
                   {" "}
          {ingressos.length === 0 ? (
            <Text style={styles.modalEmptyText}>
              Nenhum ingresso encontrado
            </Text>
          ) : (
            <FlatList
              data={ingressos}
              keyExtractor={(item) => item.id_ingresso.toString()}
              renderItem={({ item }) => (
                <View style={styles.ingressoItem}>
                                   {" "}
                  <Text style={styles.ingressoTipo}>Tipo: {item.tipo}</Text>   
                               {" "}
                  <Text style={styles.ingressoPreco}>Preço: {item.preco}</Text> 
                               {" "}
                </View>
              )}
            />
          )}
                   {" "}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
                        <Text style={styles.closeButtonText}>Fechar</Text>     
               {" "}
          </TouchableOpacity>
                 {" "}
        </View>
             {" "}
      </Modal>
         {" "}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "white", // Fundo branco
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black", // Texto preto
  },
  eventCard: {
    padding: 15,
    backgroundColor: "lightgray", // Cartão cinza claro
    marginBottom: 10,
    borderRadius: 8,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black", // Texto preto
  },
  eventLocal: {
    color: "gray", // Texto cinza
  },
  eventDate: {
    color: "gray", // Texto cinza
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "gray", // Fundo do modal cinza
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "black", // Texto preto
  },
  modalEmptyText: {
    color: "black", // Texto preto
  },
  ingressoItem: {
    padding: 10,
    backgroundColor: "white", // Item do ingresso branco
    marginBottom: 10,
    borderRadius: 6,
  },
  ingressoTipo: {
    color: "black", // Texto preto
  },
  ingressoPreco: {
    color: "gray", // Texto cinza
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "black", // Botão preto
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  closeButtonText: {
    color: "white", // Texto branco
  },
});
