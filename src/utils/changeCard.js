import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const DEL = "delete";
export const MOVE = "move";
export const EDIT = "edit";


export default async function changeCard(action, cardId, changes = undefined) {
    console.log(action);

    if (action === DEL) {
        console.log(`Deleting card with id: ${cardId}`)

        const usersRef = collection(db, "cards");
        const q = query(usersRef, where("id", "==", cardId));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
        });
    }
}
