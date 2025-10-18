import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResultDisplayProps {
  tea: number;
  tem: number;
  ted: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ tea, tem, ted }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Tasa Efectiva Anual (TEA): {tea.toFixed(2)}%</Text>
      <Text style={styles.resultText}>Tasa Efectiva Mensual (TEM): {tem.toFixed(2)}%</Text>
      <Text style={styles.resultText}>Tasa Efectiva Diaria (TED): {ted.toFixed(2)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 4,
  },
});

export default ResultDisplay;