export type AllStateType = {
  localTheme: "light" | "dark";
  setLocalTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
};
