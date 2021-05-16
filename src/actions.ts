import { Design } from "react-email-editor";

var saved: Design | null = null;

export const loadDesignFromDatabase = (): Design | null => {
  return saved;
};

export const tempSave = (design: Design) => {
  saved = design;
};
