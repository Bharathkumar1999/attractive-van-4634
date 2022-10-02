import { createContext, useState } from "react";



const userLogIn = (formstate)=>{
    return  fetch(`https://reqres.in/api/login`,{
     method:"POST",
     headers:{
       "Content-Type" : "application/json"
     },
     body:JSON.stringify(formstate)
    }).then((res)=>res.json())
   }
   

export const AppContext = createContext()

function AppContextProvider({children}) {
    const [isAuth,setisAuth] = useState(false)
    const [token,setToken] = useState(null);

    const loginUser = (formstate)=>{
        userLogIn(formstate).then((res)=>{
            setToken(res.token)
          }).catch((err)=>{
            console.log(err)
          })
        setisAuth(true)
    }
    
    const logoutUser = ()=>{
        setisAuth(false)
        setToken(null)
    }

return <AppContext.Provider value={{token,isAuth,loginUser,logoutUser}}>{children}</AppContext.Provider>
}

export default AppContextProvider;

