// App.js
import { registerRootComponent } from 'expo';
import { useState } from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoCard from './src/components/InfoCard';

const DAFTAR_MAHASISWA = [
    { id: '2532060', nama: 'Pieter Vachrelio Immanuel Nicolaas', prodi: 'Teknologi Informasi' },
    { id: '2532079', nama: 'Yondiakses Ferdi tampubolon', prodi: 'Teknologi Informasi' },
    { id: '2532032', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
    { id: '2532054', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
    { id: '2532046', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
];

function App() {
    const [keyword, setKeyword] = useState('');

    const filteredMahasiswa = DAFTAR_MAHASISWA.filter((mhs) =>
        mhs.nama.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>UTS Pemrograman Mobile</Text>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Soal 1: Reusable InfoCard</Text>
                <InfoCard
                    title="Menyelesaikan Modul Praktikum 3"
                    status="selesai"
                    onPress={() => Alert.alert('Detail', 'Modul 3 telah selesai diverifikasi.')}
                />
                <InfoCard
                    title="Implementasi Navigasi Native"
                    status="proses"
                    onPress={() => Alert.alert('Detail', 'Sedang dalam tahap pengerjaan.')}
                />
            </View>

            <View style={[styles.sectionContainer, { flex: 1 }]}>
                <Text style={styles.sectionTitle}>Soal 2: Direktori Mahasiswa</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari nama mahasiswa..."
                    placeholderTextColor="#888"
                    value={keyword}
                    onChangeText={(text) => setKeyword(text)}
                />

                <FlatList
                    data={filteredMahasiswa}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.studentCard}>
                            <Text style={styles.studentName}>{item.nama}</Text>
                            <Text style={styles.studentProdi}>{item.prodi}</Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Data tidak ditemukan!</Text>
                    }
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#2c3e50',
    },
    sectionContainer: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        color: '#34495e',
    },
    searchInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#dcdde1',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        marginBottom: 12,
    },
    studentCard: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 6,
        marginBottom: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#007bff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    studentName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2f3640',
    },
    studentProdi: {
        fontSize: 13,
        color: '#718093',
        marginTop: 2,
    },
    emptyText: {
        textAlign: 'center',
        color: '#e74c3c',
        marginTop: 20,
        fontStyle: 'italic',
    },
});

registerRootComponent(App);