import { StyleSheet, Text, View } from 'react-native';

export default function Maquinas({ maquina }) {
    const statusConfig = {
        0: { label: 'Alerta', color: '#FF3B30' },
        1: { label: 'Operando', color: '#34C759' },
        2: { label: 'Atenção', color: '#FFCC00' },
    };

    const currentStatus = statusConfig[maquina.status] || { label: 'Indefinido', color: '#8E8E93' };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.machineName}>{maquina.nome}</Text>
                <View style={styles.statusGroup}>
                    <Text style={styles.statusText}>{currentStatus.label}</Text>
                    <View style={[styles.circleStatus, { backgroundColor: currentStatus.color }]} />
                </View>
            </View>

            <View style={styles.bottom}>
                <View style={styles.dataBlock}>
                    <Text>🌡️</Text>
                    <Text style={styles.dataText}>{maquina.temp}</Text>
                </View>

                <View style={styles.lineVertical} />

                <View style={styles.dataBlock}>
                    <Text>⚡</Text>
                    <Text style={styles.dataText}>{maquina.volt}</Text>
                </View>

                <View style={styles.lineVertical} />

                <View style={styles.dataBlock}>
                    <Text>🕑</Text>
                    <Text style={styles.dataText}>{maquina.tempo}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    machineName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    statusGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 14,
        color: '#666',
    },
    circleStatus: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 8,
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#f9f9f9',
    },
    dataBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dataText: {
        fontSize: 14,
        color: '#444',
    },
    lineVertical: {
        width: 1,
        height: 15,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 12,
    },
    symbolTemperature: { width: 15, height: 15 },
    symbolVolt: { width: 15, height: 15 },
    symbolTime: { width: 15, height: 15 },
});