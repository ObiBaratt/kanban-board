import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

const unpackUser = user => ({
    uid: user.uid,
    email: user.email,
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        var unpackedUser = unpackUser(authState);
        setAuthUser(unpackedUser);
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return { authUser, loading }
}
