import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import RateConverterForm from '../components/RateConverterForm';
import ResultDisplay from '../components/ResultDisplay';

const RateConverterScreen = () => {
  const [results, setResults] = useState({ TEM: null, TED: null });

  const handleConversion = (tea) => {
    const tem = tea / 12; // Simplified conversion for demonstration
    const ted = tea / 365; // Simplified conversion for demonstration
    setResults({ TEM: tem, TED: ted });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Conversión de Tasas</Text>
      <RateConverterForm onConvert={handleConversion} />
      <ResultDisplay results={results} />
    </View>
  );
};

export default RateConverterScreen;