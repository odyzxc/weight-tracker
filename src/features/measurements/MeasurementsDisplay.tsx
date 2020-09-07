import React from "react";
import { useSelector } from "react-redux";
import { Text, View, Dimensions } from "react-native";
import { VictoryChart, VictoryLine } from "victory-native";

import { getMeasurements } from "./selectors";

/*
const dateToX = (date: Date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`; // TODO moment or sth?
*/

const getWeightInKgs = (weight: number) => weight / 1000; // TODO move to utils

const dateToX = (dateString: string | Date) => {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const MeasurementsDisplay = () => {
  const measurements = useSelector(getMeasurements);
  return (
    <View>
      <Text>
        Measurements debug:{" "}
        {measurements.map((m) => getWeightInKgs(m.weight)).toString()}
      </Text>
      <VictoryChart>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={measurements.map((m) => ({
            x: dateToX(m.date),
            y: getWeightInKgs(m.weight),
          }))} /*TODO*/
        />
      </VictoryChart>
    </View>
  );
};

export default MeasurementsDisplay;
