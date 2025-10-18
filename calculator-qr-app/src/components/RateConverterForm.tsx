import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RateConverterForm = () => {
  const [tea, setTea] = useState('');
  const [tem, setTem] = useState('');
  const [ted, setTed] = useState('');

  const convertRates = () => {
    const teaValue = parseFloat(tea);
    if (!isNaN(teaValue)) {
      const temValue = (Math.pow(1 + teaValue, 1 / 12) - 1) * 100;
      const tedValue = (Math.pow(1 + teaValue, 1 / 365) - 1) * 100;
      setTem(temValue.toFixed(2));
      setTed(tedValue.toFixed(2));
    } else {
      setTem('');
      setTed('');
    }
  };

  return (
    <View>
      <Text>Tasa Efectiva Anual (TEA):</Text>
      <TextInput
        value={tea}
        onChangeText={setTea}
        keyboardType="numeric"
        placeholder="Ingresa TEA"
      />
      <Button title="Convertir" onPress={convertRates} />
      <Text>Tasa Efectiva Mensual (TEM): {tem} %</Text>
      <Text>Tasa Efectiva Diaria (TED): {ted} %</Text>
    </View>
  );
};

export default RateConverterForm;