import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";


export default async function fetchCards(currentUser) {
    const usersRef = collection(db, "cards");

    // Create a query against the collection.
    const q = query(usersRef, where("user", "==", currentUser));
    console.log('sending query')

    const querySnapshot = await getDocs(q);

    const cards = [];

    querySnapshot.forEach((doc) => {
        cards.push(doc.data());
    });
    return cards;
}
