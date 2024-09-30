import {gStyles} from '@styles/GlobalStyles';
import React from 'react';
import {TextInput, View} from 'react-native';

interface SectionThreeProps {
  formData: {gender: string; age: number};
  handleInputChange: (field: 'gender' | 'age', value: string | number) => void;
}

const SectionThree = ({formData, handleInputChange}: SectionThreeProps) => {
  return (
    <View>
      <TextInput
        style={gStyles.input}
        placeholder="Gender (male/female)"
        value={formData.gender}
        onChangeText={value => handleInputChange('gender', value)}
      />
      <TextInput
        style={gStyles.input}
        placeholder="Age"
        value={formData.age.toString()}
        onChangeText={value => handleInputChange('age', parseInt(value))}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default SectionThree;
