export enum Sex {
  MALE = "M",
  FEMALE = "F"
}

export enum WeeklyActivity {
  NONE,
  SELDOM,
  OFTEN,
  INTENSIVE,
  VERY_INTENSIVE
}

export interface IPersonalData {
  name: string;
  startingWeight: number;
  height: number;
  sex: Sex;
  age: number;
  weeklyActivity: WeeklyActivity;
}