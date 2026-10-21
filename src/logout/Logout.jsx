import { useContext, useEffect } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/auth-context";
import { logout } from "../api/auth-api";

export default function Logout() {
    const { logout } = useContext(AuthContext)

    useEffect(() => {
        logout()
    },[logout])
    return(
        <Navigate to='/' />
     );
}