import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Veterinary Patient {""}
          <span className="text-indigo-700">Tracking</span>
        </h1>

        <div className="mt-10 md:flex">
          <PatientForm />
          <PatientList />
        </div>
      </div>
    </>
  );
}

export default App;
