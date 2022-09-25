import PatientEntry from "../components/patientEntry";

export default function PatientView() {
  return (
    <div className="flex justify-center items-start pt-10 bg-gray-200 h-full">
      <div className="mx-4">
        <PatientEntry />
      </div>
    </div>
  );
}
