import { createContext, useContext } from "react";
import useFirebaseAuth from "../utils/authUser";

const userAuthContext = createContext({
    authUser: null,
    loading: true
});

export function AuthProivder({ children }) {
    const auth = useFirebaseAuth();
    return <userAuthContext.Provider value={auth}>{ children }</userAuthContext.Provider>;
}

export const useMyAuth = () => useContext(userAuthContext)
