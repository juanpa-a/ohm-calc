export interface IOhmValueCalculator {
  calculateOhmValues: (
    bandA: String,
    bandB: String,
    bandC: String,
    bandD: String
  ) => Number
}

export type Choice = {
  color: String,
  key: String,
  value: String,
}

export enum BandColor {
  black = 1,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

export enum MultiplierColor {
  black = 1,
  brown = 10,
  red = 100,
  orange = 1000,
  yellow = 10000,
  green = 100000,
  blue = 1000000,
  violet = 10000000,
  grey = 100000000,
  white = 1000000000,
  gold = 0.1,
  silver = 0.01,
}

export enum ToleranceColor {
  brown = 1,
  red = 2,
  orange = 0.05,
  yellow = 0.02,
  green = 0.5,
  blue = 0.25,
  violet = 0.1,
  grey = 0.01,
  gold = 5,
  silver = 10,
}
