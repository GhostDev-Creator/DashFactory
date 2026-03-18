import { StyleSheet, Text, View } from 'react-native';

export default function MinCards({ totalMaquinas, operando, alertas }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.item}>
                    <Text style={styles.labelMaquina}>Total Máquinas</Text>
                    <Text style={styles.valueMaquinaTotal}>{totalMaquinas}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.labelMaquina}>Máquinas Operando</Text>
                    <Text style={styles.valueMaquinaOperando}>{operando}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.labelMaquina}>Máquinas em Alerta</Text>
                    <Text style={styles.valueMaquinaAlerta}>{alertas}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        width: 'auto',
        height: 'auto',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 8,
    },
    labelMaquina: {
        color: '#595959',
        fontSize: 10,
        fontWeight: '400'
    },
    valueMaquinaTotal: {
        color: '#005eff',
        fontSize: 16,
        fontWeight: '600'
    },
    valueMaquinaOperando: {
        color: '#1ba400',
        fontSize: 16,
        fontWeight: '600'
    },
    valueMaquinaAlerta: {
        color: '#ff0000',
        fontSize: 16,
        fontWeight: '600'
    },
})