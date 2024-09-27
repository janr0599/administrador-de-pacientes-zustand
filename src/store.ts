import { create } from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
};

const createPatient = (data: DraftPatient): Patient => {
  return {
    ...data,
    id: uuidv4(),
  };
};

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const patient = createPatient(data);

    set((state) => ({
      patients: [...state.patients, patient],
    }));
  },
}));
