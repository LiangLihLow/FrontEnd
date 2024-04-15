import { useContext } from "react";
import { Navigate } from "react-router-dom/dist";
import { AuthContext } from "./AuthContent";


export default function RequireAuth({ children }) {
    const token = useContext(AuthContext).token

    if (!token) {
        return <Navigate to="/login" replace />
    }
    return children
}