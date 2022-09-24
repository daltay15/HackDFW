import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  onSnapshot,
  where,
  orderBy,
  query,
} from "firebase/firestore";

import { app } from "../firebase-config";

export function useDoctors() {
  const [doctors, setDoctors] = useState([]);

  console.log("ATTEMPTING TO FETCH DOCTORS");

  useEffect(() => {
    const fs = getFirestore(app);
    const doctorCollection = collection(fs, "doctors");
    const q = query(doctorCollection);

    return onSnapshot(q, ({ docs }) => {
      console.log(docs.map((d) => ({ path: d.ref.path, ...d.data() })));
      setDoctors(docs.map((d) => ({ path: d.ref.path, ...d.data() })));
    });
  }, []);

  return { doctors };
}
