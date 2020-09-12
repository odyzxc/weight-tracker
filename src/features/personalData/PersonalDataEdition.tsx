import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

import { getState as getPersonalData } from "./selectors";
import { addPersonalData } from "./personalDataSlice";
import { personalDataValidationObject } from "./personalDataValidationObject";
import { IPersonalData } from "./interfaces";

type PersonalDataEditionScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PersonalDataEdition"
>;

type NavigationProps = {
  navigation: PersonalDataEditionScreenNavigationProp;
};

const PersonalDataEdition: FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const initialData = useSelector(getPersonalData);
  const onSubmit = (values: Partial<IPersonalData>) => {
    dispatch(addPersonalData(values as IPersonalData));
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialData}
        onSubmit={onSubmit}
        validationSchema={personalDataValidationObject}
      >
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <>
            <TextInput
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.name}</Text>
            )}
            <Button
              title="Let's start"
              disabled={!isValid}
              onPress={handleSubmit as (event: any) => void} // TODO is there any way to get rid of this hack?
            />
          </>
        )}
      </Formik>
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

export default PersonalDataEdition;
