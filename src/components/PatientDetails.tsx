import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

function PatienttDetails({ patient }: PatientDetailsProps) {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Patient deleted successfully", {
      autoClose: 3000,
    });
  };

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

      <div className="flex flex-col gap-3 lg:flex-row justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-colors"
          onClick={() => getPatientById(patient.id)}
        >
          Edit
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-colors"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PatienttDetails;
