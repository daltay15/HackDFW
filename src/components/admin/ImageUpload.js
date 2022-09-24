import { DocumentReference, setDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { app } from "../../firebase-config";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function (props) {
  const inputRef = useRef(null);

  const uploadImage = async (e) => {
    const reader = new FileReader();
    if (!e.target.files) {
      throw new Error("");
    }
    const file = e.target.files[0];

    if (!file) return;

    const ext = file.name.split(".")[1];

    const storage = getStorage(app);
    const storageRef = ref(storage, props.filePath + "." + ext);

    await uploadBytes(storageRef, file, {});

    await setDoc(
      props.docRef,
      {
        [props.docField]: await getDownloadURL(storageRef),
      },
      { merge: true }
    );
  };

  return (
    <div className="flex gap-4 font-noveregular">
      {!props.existingImage ? (
        <div className="w-32 h-16 border w-min-16 min-w-16"></div>
      ) : (
        <div className="w-32 h-16 border w-min-16 min-w-16 flex items-center justify-center p-1">
          <img
            className="max-h-full hover:cursor-pointer"
            src={props.existingImage}
            onClick={() => inputRef.current?.click()}
          />
        </div>
      )}
      <div className="relative flex flex-col">
        <div className="text-sm pb-2">{props.label}</div>
        <button
          className="cursor-pointer outline outline-2 outline-gray-400 scale-95 transition duration-300 hover:scale-100 hover:rounded-sm"
          onClick={() => inputRef.current?.click()}
        >
          Upload
        </button>
        <input
          ref={inputRef}
          className="hidden"
          accept="image/*"
          type="file"
          onChange={(e) =>
            toast.promise(uploadImage(e), {
              pending: "Uploading Image...",
              success: "Image Uploaded...",
              error: "Image Upload Failed...",
            })
          }
        />
      </div>
    </div>
  );
}
