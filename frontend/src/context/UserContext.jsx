import { jwtDecode } from 'jwt-decode';
import React, { createContext } from 'react'
import useLocalStorage from 'use-local-storage';
export const UserContext = createContext();
function UserProvider({children}) {
const [token, setToken] = useLocalStorage('token',null)
const [decoded, setDecoded] = useLocalStorage("decoded",null)

const addToken=(token) =>{
setToken(token)
const user_decoded = jwtDecode(token);

setDecoded(user_decoded)
console.log(user_decoded);

}
const logOut =()=>{
  setToken(null)
  setDecoded(null)
}
    const data = {token,addToken,decoded,logOut}
  return (
   <UserContext.Provider value={data}>
    {children}
   </UserContext.Provider>
  )
}

export default UserProvider