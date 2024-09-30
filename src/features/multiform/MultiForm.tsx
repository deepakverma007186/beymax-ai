import SectionOne from '@components/multiform/SectionOne';
import SectionThree from '@components/multiform/SectionThree';
import SectionTwo from '@components/multiform/SectionTwo';
import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  age: number;
}

const MultiForm = () => {
  const [step, setStep] = useState(1); // Current step of the form
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: 'male',
    age: 0,
  });

  // Function to handle form input change
  const handleInputChange = (
    field: keyof FormDataProps,
    value: string | number,
  ) => {
    setFormData({...formData, [field]: value});
  };

  // Function to go to the next step
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Function to submit the form
  const submitForm = () => {
    Alert.alert('Form Data', JSON.stringify(formData, null, 2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multi-Step Form</Text>

      {/* Section 1: First Name & Last Name */}
      {step === 1 && (
        <SectionOne formData={formData} handleInputChange={handleInputChange} />
      )}

      {/* Section 2: Email & Phone */}
      {step === 2 && (
        <SectionTwo formData={formData} handleInputChange={handleInputChange} />
      )}

      {/* Section 3: Gender & Age */}
      {step === 3 && (
        <SectionThree
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {step > 1 && <Button title="Previous" onPress={prevStep} />}
        {step < 3 ? (
          <Button title="Next" onPress={nextStep} />
        ) : (
          <Button title="Submit" onPress={submitForm} />
        )}
      </View>
    </View>
  );
};

export default MultiForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'teal',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
