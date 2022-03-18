import { atom } from "recoil";

export const modeState = atom({
  key: "modeState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const tokenState = atom({
  key: "tokenState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
