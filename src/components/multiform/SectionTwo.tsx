import {gStyles} from '@styles/GlobalStyles';
import React from 'react';
import {TextInput, View} from 'react-native';

interface SectionTwoProps {
  formData: {email: string; phone: string};
  handleInputChange: (field: 'email' | 'phone', value: string) => void;
}

const SectionTwo = ({formData, handleInputChange}: SectionTwoProps) => {
  return (
    <View>
      <TextInput
        style={gStyles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={value => handleInputChange('email', value)}
      />
      <TextInput
        style={gStyles.input}
        placeholder="Phone"
        value={formData.phone}
        onChangeText={value => handleInputChange('phone', value)}
        keyboardType="phone-pad"
      />
    </View>
  );
};

export default SectionTwo;
