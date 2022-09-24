import ImageUpload from "../../components/admin/ImageUpload";
import { useDoctors } from "../../hooks/useDoctors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminView() {
  const { doctors } = useDoctors();

  return (
    <div className="flex justify-center items-center bg-gray-200 h-full">
      A list of Translators in the building will be here
    </div>
  );
}
