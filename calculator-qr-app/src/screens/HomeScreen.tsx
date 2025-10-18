import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Calculadora QR</Text>
            <Button
                title="Conversión de Tasas"
                onPress={() => navigation.navigate('RateConverter')}
            />
            <Button
                title="Escaneo de Código QR"
                onPress={() => navigation.navigate('QRScanner')}
                style={{ marginTop: 20 }}
            />
        </View>
    );
};

export default HomeScreen;