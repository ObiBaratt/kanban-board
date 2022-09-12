import { collection, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";


export default async function moveCard(card, newType) {

    const usersRef = collection(db, "cards");
    const q = query(usersRef, where("id", "==", card.id));

    console.log('sending move query')

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {type: newType})
    });
    return "Moved";
}
