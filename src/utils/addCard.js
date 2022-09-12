import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function addCard(cardInfo){
    console.log('trying to add card')
    try {
    const docRef = await addDoc(collection(db, "cards"), cardInfo);
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}
