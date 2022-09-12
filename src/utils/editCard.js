import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";


export default async function editCard(card, data) {

    const usersRef = collection(db, "cards");
    const q = query(usersRef, where("id", "==", card.id));

    console.log('sending edit query')

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, data)
    });
    return "Edited";
}
