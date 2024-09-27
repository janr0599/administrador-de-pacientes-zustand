import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

function PatienttDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="bg-white shadow-md rounded-lg py-5 px-5 my-5">
      <PatientDetailItem label={"id"} data={patient.id} />
      <PatientDetailItem label={"name"} data={patient.name} />
      <PatientDetailItem label={"owner"} data={patient.owner} />
      <PatientDetailItem label={"email"} data={patient.email} />
      <PatientDetailItem
        label={"date registered"}
        data={patient.date.toString()}
      />
      <PatientDetailItem label={"symptoms"} data={patient.symptoms} />
    </div>
  );
}

export default PatienttDetails;
