import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Error from "./Error";
import { DraftPatient } from "../types";
import { usePatientStore } from "../store";
import { useEffect } from "react";

function PatientForm() {
  const { addPatient, activeID, patients, updatePatient } = usePatientStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeID) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeID
      )[0];

      setValue("name", activePatient.name);
      setValue("owner", activePatient.owner);
      setValue("email", activePatient.email);
      setValue("date", activePatient.date);
      setValue("symptoms", activePatient.symptoms);
    }
  }, [activeID]);

  const registerPatient = (data: DraftPatient) => {
    if (activeID) {
      updatePatient(data);
      toast.success("Patient updated successfully!", {
        autoClose: 3000,
      });
    } else {
      addPatient(data);
      toast.success("Patient added successfully!", {
        autoClose: 3000,
      });
    }

    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Intake</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add and {""}
        <span className="text-indigo-600 font-bold">Manage {""}</span>
        Your Patients
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Patient name"
            {...register("name", {
              required: "Patient name is required",
            })}
          />

          {errors.name && <Error>{errors.name.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="text-sm uppercase font-bold">
            Owner
          </label>
          <input
            id="owner"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Owner's name"
            {...register("owner", {
              required: "Owner's name is required",
            })}
          />

          {errors.owner && <Error>{errors.owner.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Registered email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Date created
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "Date created is required",
            })}
          />

          {errors.date && <Error>{errors.date.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="What is the patient's condition"
            {...register("symptoms", {
              required: "Symptoms are required",
            })}
          />

          {errors.symptoms && <Error>{errors.symptoms.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value={activeID ? "Update patient" : "add patient"}
        />
      </form>
    </div>
  );
}

export default PatientForm;
