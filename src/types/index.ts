export type Patient = {
  name: string;
  owner: string;
  email: string;
  date: Date;
  symptoms: string;
  id: string;
};

export type DraftPatient = Omit<Patient, "id">;
