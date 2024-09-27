import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

function PatienttDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="bg-white shadow-md rounded-lg py-5 px-5 my-5 mx-5">
      <PatientDetailItem label={"id"} data={patient.id} />
      <PatientDetailItem label={"name"} data={patient.name} />
      <PatientDetailItem label={"owner"} data={patient.owner} />
      <PatientDetailItem label={"email"} data={patient.email} />
      <PatientDetailItem
        label={"date registered"}
        data={patient.date.toString()}
      />
      <PatientDetailItem label={"symptoms"} data={patient.symptoms} />

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-colors"
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PatienttDetails;
