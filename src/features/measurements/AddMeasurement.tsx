import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

import { addMeasurement } from "./measurementsSlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

type AddMeasurementScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddMeasurement"
>;

type NavigationProps = {
  navigation: AddMeasurementScreenNavigationProp;
};

const AddMeasurement: FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [measurement, setMeasurement] = useState<string>("0");
  const [label, setLabel] = useState<string>();
  return (
    <View style={styles.container}>
      <Text>Weight</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(weight) => setMeasurement(weight)}
        value={measurement?.toString()}
      />

      <Text>Label</Text>
      <TextInput
        style={styles.input}
        onChangeText={(label) => setLabel(label)}
        value={label}
      />
      <Button
        title="+"
        onPress={() => {
          dispatch(addMeasurement({ weight: parseFloat(measurement), label }));
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: "white",
    fontSize: 20, // TODO style it
  },
});

export default AddMeasurement;
