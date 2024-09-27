import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

function PatientList() {
  const { patients } = usePatientStore();

  console.log(patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Track and {""}
            <span className="text-indigo-600 font-bold">edit {""}</span>
            Your Patients
          </p>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No patients yet</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Add patients and they will {""}
            <span className="text-indigo-600 font-bold">show {""}</span>
            here
          </p>
        </>
      )}
    </div>
  );
}

export default PatientList;
