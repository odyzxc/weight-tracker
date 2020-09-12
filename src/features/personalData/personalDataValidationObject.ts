import { object, string, number, mixed } from "yup";
import { Sex, WeeklyActivity } from "./interfaces";

export const personalDataValidationObject = object().shape({
  name: string().required(),
  startingWeight: number().max(500).required(),
  height: number().max(300).required(),
  sex: mixed().oneOf(Object.values(Sex)).required(),
  age: number().max(150).required(),
  weeklyActivity: mixed().oneOf(Object.values(WeeklyActivity)).required(),
});
