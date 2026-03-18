import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Linha de Montagem #01</Text>
            <Text style={styles.paragraph}>Monitoramento em tempo real</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 30
    },
    title: {
        color: '#292929',
        fontSize: 22,
        fontWeight: '600'
    },
    paragraph: {
        color: '#292929',
        fontSize: 14,
        fontWeight: '400'
    },
})