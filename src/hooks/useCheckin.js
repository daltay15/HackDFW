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

export function useCheckIn() {
  const [checkins, setCheckins] = useState([]);

  console.log("ATTEMPTING TO FETCH CHECKINS");

  useEffect(() => {
    const fs = getFirestore(app);
    const doctorCollection = collection(fs, "checkins");
    const q = query(doctorCollection);

    return onSnapshot(q, ({ docs }) => {
      console.log(docs.map((d) => ({ path: d.ref.path, ...d.data() })));
      setCheckins(docs.map((d) => ({ path: d.ref.path, ...d.data() })));
    });
  }, []);

  return { checkins };
}
