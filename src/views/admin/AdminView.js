import ImageUpload from "../../components/admin/ImageUpload";
import { useDoctors } from "../../hooks/useDoctors";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import FirestoreFieldInput from "../../components/admin/FirestoreFieldInput";
import { app } from "../../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminView() {
  const { doctors } = useDoctors();

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 h-full px-32">
      <div className="py-4 text-4xl font-bold">DOCTOR BACKEND</div>
      <table className="w-full text-left border border-gray-500 table-fixed px-8">
        <thead>
          <tr className="font-novaregular ">
            <th className="pt-3 pl-4">First Name</th>
            <th className="pt-3">Last Name</th>
            <th className="pt-3">Department</th>
            <th className="pt-3">Username</th>
            <th className="pt-3">Password</th>
          </tr>
        </thead>
        <tbody className="">
          {doctors.map((d) => {
            const ref = doc(getFirestore(app), d.path);
            console.log(ref);
            return (
              <tr key={ref.id}>
                <td className="py-4 pl-4">
                  <FirestoreFieldInput
                    value={d.firstName}
                    field="firstName"
                    docRef={ref}
                    label="First Name"
                  ></FirestoreFieldInput>
                </td>
                <td className="py-4">
                  <FirestoreFieldInput
                    value={d.lastName}
                    field="lastName"
                    docRef={ref}
                    label="Last Name"
                  ></FirestoreFieldInput>
                </td>
                <td className="py-4">
                  <FirestoreFieldInput
                    value={d.department}
                    field="department"
                    docRef={ref}
                    label="Department"
                  ></FirestoreFieldInput>
                </td>
                <td className="py-4">
                  <FirestoreFieldInput
                    value={d.username}
                    field="username"
                    docRef={ref}
                    label="User Name"
                  ></FirestoreFieldInput>
                </td>
                <td className="py-4">
                  <FirestoreFieldInput
                    value={d.password}
                    field="password"
                    docRef={ref}
                    label="Password"
                  ></FirestoreFieldInput>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center pt-5 pb-5">
        <button
          onClick={() =>
            toast.promise(
              async () => {
                const fs = getFirestore(app);
                const doctors = collection(fs, "doctors");
                const doctor = {
                  firstName: "",
                  lastName: "",
                  department: "Pediatrics",
                  username: "",
                  password: "",
                };
                await addDoc(doctors, doctor);
              },
              {
                pending: "Adding Doctor...",
                success: "Doctor Added",
                error: "Doctor Not Added",
              }
            )
          }
          className="p-2 text-2xl font-bold text-gray-600 transition duration-300 scale-95 bg-white border border-2 border-gray-500 font-novaregular hover:scale-105 fixed bottom-[4rem]  translate-x-[50%] md:translate-x-[unset] right-1/2 md:right-[2rem]"
        >
          + Add Doctor
        </button>
      </div>
    </div>
  );
}
