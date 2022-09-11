import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default async function deleteCard(cardId) {

    const usersRef = collection(db, "cards");
    const q = query(usersRef, where("id", "==", cardId));

    const querySnapshot = await getDocs(q);

    console.log(`Deleting card with id: ${cardId}`)

    querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
    });
}
