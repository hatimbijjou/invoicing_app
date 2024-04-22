import { IUser } from "frontend/interfaces"
import { Context, ReactNode, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode";


declare module "jwt-decode" {
    export interface JwtPayload {
        user: IUser
    }
}

interface IAuthContext {
    userInfo?: IUser
}

export const AuthContext: Context<IAuthContext> = createContext({})

export const useAuth = () => {
    const token: string = localStorage.getItem("token")
    const [userInfo, setUserInfo] = useState<IUser>({})

    useEffect(() => {
        if (token) {
            const decodedJWT = jwtDecode(token)
            if (decodedJWT) setUserInfo(decodedJWT.user)
        }
    }, [])

    return {token, userInfo}
}

export const AuthMiddelware: React.FC<{children: ReactNode}> = ({children}) => {
    const {token, userInfo} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            localStorage.clear();
            navigate("/account-login");
        }
    }, [token, navigate]);

    if (token) {
        return <AuthContext.Provider value={{userInfo}}>{children}</AuthContext.Provider>
    }
    return
}