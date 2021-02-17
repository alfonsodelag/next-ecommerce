import { createContext } from "react";

const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
    setReload: () => null
});

export default AuthContext;