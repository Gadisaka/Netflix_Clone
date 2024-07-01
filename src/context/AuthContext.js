import { createContext, useContext , useEffect , useState } from "react"


const AuthContext = createContext()

export function AuthContextProvider({children}){
    return(
        <AuthContext.provider>
            {children}
        </AuthContext.provider>
    )
}

export function UserAuth(){
    return use
}