// src/components/InfoCard.js
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InfoCard({ title, status, onPress }) {
    const isSelesai = status.toLowerCase() === 'selesai';

    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={[styles.badge, { backgroundColor: isSelesai ? '#d4edda' : '#fff3cd' }]}>
                    <Text style={[styles.badgeText, { color: isSelesai ? '#155724' : '#856404' }]}>
                        {status}
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Lihat Detail</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});