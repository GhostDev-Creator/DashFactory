import { StyleSheet, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import MinCards from './src/components/MinCards';
import Maquinas from './src/components/Maquinas';

const listMaquinas = [
  { id: 1, nome: "Prensa Hidráulica P-03", status: 1, temp: "42°C", volt: "110V", tempo: "8h" },
  { id: 2, nome: "Torno CNC T-12", status: 1, temp: "38°C", volt: "220V", tempo: "6h" },
  { id: 3, nome: "Fresadora F-05", status: 2, temp: "65°C", volt: "220V", tempo: "12h" },
  { id: 4, nome: "Injetora I-08", status: 1, temp: "45°C", volt: "380V", tempo: "4h" },
  { id: 5, nome: "Esteira Rolante E-15", status: 0, temp: "78°C", volt: "110V", tempo: "15h" },
  { id: 6, nome: "Robô Solda R-22", status: 1, temp: "52°C", volt: "220V", tempo: "9h" },
  { id: 7, nome: "Compressores de Ar C-01", status: 1, temp: "35°C", volt: "220V", tempo: "24h" },
  { id: 8, nome: "Serra de Fita S-10", status: 2, temp: "55°C", volt: "110V", tempo: "2h" },
  { id: 9, nome: "Caldeira Industrial K-04", status: 0, temp: "95°C", volt: "380V", tempo: "48h" },
  { id: 10, nome: "Bomba Centrífuga B-07", status: 1, temp: "40°C", volt: "220V", tempo: "10h" },
  { id: 11, nome: "Forno de Indução F-09", status: 1, temp: "120°C", volt: "380V", tempo: "5h" },
  { id: 12, nome: "Misturador M-14", status: 2, temp: "48°C", volt: "220V", tempo: "3h" },
  { id: 13, nome: "Elevador de Carga E-02", status: 1, temp: "30°C", volt: "220V", tempo: "1h" },
  { id: 14, nome: "Retificadora R-05", status: 0, temp: "82°C", volt: "220V", tempo: "7h" },
  { id: 15, nome: "Painel Elétrico Central", status: 1, temp: "32°C", volt: "440V", tempo: "72h" }
];

export default function App() {
  const totalMaquinas = listMaquinas.length;
  const maquinasParada = listMaquinas.filter(item => item.status === 0).length;
  const maquinasAtencao = listMaquinas.filter(item => item.status === 2).length;
  const maquinasAlerta = maquinasAtencao + maquinasParada;
  const maquinasOperando = listMaquinas.filter(item => item.status === 1).length;

  return (
    <View style={styles.container}>
      <Header />
      <MinCards totalMaquinas={totalMaquinas} operando={maquinasOperando} alertas={maquinasAlerta} />
      <FlatList data={listMaquinas} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => <Maquinas maquina={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
