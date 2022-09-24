import { DocumentReference, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FirestoreFieldInput(props) {
  console.log("HMMMM");
  console.log(props.field);
  return (
    <div className="pr-4 w-full">
      <input
        className="px-4 py-2 border w-full"
        value={props.value}
        placeholder={props.label}
        onChange={(e) => {
          const fs = getFirestore(app);
          console.log("WHAT?!");
          console.log(props.docRef);

          setDoc(
            props.docRef,
            { [props.field]: e.target.value },
            { merge: true }
          );
        }}
      ></input>
    </div>
  );
}
