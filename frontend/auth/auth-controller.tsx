import { IUser } from "frontend/interfaces"
import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
    const token: string = localStorage.getItem("token")
    const userInfo: IUser = {
        username: ""
    }

    useEffect(() => {
        if (token) {
            const decodedJWT = jwtDecode(token)
            console.log(decodedJWT)
        }
    }, [])

    return {token, userInfo}
}

export const AuthMiddelware: React.FC<{children: ReactNode}> = ({children}) => {
    const {token} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            localStorage.clear();
            navigate("/account-login");
        }
    }, [token, navigate]);

    if (token) {
        return <>{children}</>
    }
    return
}