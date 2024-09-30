import {gStyles} from '@styles/GlobalStyles';
import React from 'react';
import {TextInput, View} from 'react-native';

interface SectionOneProps {
  formData: {firstName: string; lastName: string};
  handleInputChange: (field: 'firstName' | 'lastName', value: string) => void;
}

const SectionOne = ({formData, handleInputChange}: SectionOneProps) => {
  return (
    <View>
      <TextInput
        style={gStyles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={value => handleInputChange('firstName', value)}
      />
      <TextInput
        style={gStyles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={value => handleInputChange('lastName', value)}
      />
    </View>
  );
};

export default SectionOne;
