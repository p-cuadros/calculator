import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRScanner = () => {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(true);

  const handleBarCodeRead = (data: any) => {
    if (isScanning) {
      setScannedData(data.data);
      setIsScanning(false);
    }
  };

  const resetScanner = () => {
    setScannedData(null);
    setIsScanning(true);
  };

  return (
    <View style={{ flex: 1 }}>
      {isScanning ? (
        <RNCamera
          style={{ flex: 1 }}
          onBarCodeRead={handleBarCodeRead}
          captureAudio={false}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Escanea un código QR</Text>
          </View>
        </RNCamera>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>Contenido Escaneado: {scannedData}</Text>
          <Button title="Escanear de nuevo" onPress={resetScanner} />
        </View>
      )}
    </View>
  );
};

export default QRScanner;