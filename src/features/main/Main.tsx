import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, Button, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../navigation/types";
import MeasurementsDisplay from "../measurements/MeasurementsDisplay";
import { clearMeasurements } from '../measurements/measurementsSlice';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, "Main">;
type MainProps = {
  navigation: MainScreenNavigationProp;
};

const Main: FC<MainProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <MeasurementsDisplay />
      <Button
        title="Add weight"
        onPress={() => navigation.navigate("AddMeasurement")}
      />
      <Button
        title="Clear data"
        onPress={() => dispatch(clearMeasurements())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
