import { createContext } from "react";

export const UserTokenIdContext = createContext()

export const UserTokenIdProvider = ({children}) => {
  const userToken = localStorage.getItem('@Token');

  return(
    <UserTokenIdContext.Provider value={userToken}>
      {children}
    </UserTokenIdContext.Provider>
  )
}