import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRScanner from '../components/QRScanner';

const QRScannerScreen = () => {
    return (
        <View style={styles.container}>
            <QRScanner />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default QRScannerScreen;