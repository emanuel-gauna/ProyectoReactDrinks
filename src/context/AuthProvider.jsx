import { useState, useContext, useEffect , createContext} from "react";
import { useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { PropTypes } from "prop-types";
import { userLogin, userRegister } from "../services/user.service";


const AuthContext = createContext();

export function AuthProvider ({children}){
const  navigate = useNavigate();
const [ currentUser , setCurrentUser  ] = useState(null);
const storedToken = localStorage.getItem()

    function register (data){
        userRegister(data)
        .then((res) =>{
            if(res.ok){
                alert(res.message)
                setTimeout(() =>{
                    Navigate("/login")
                }, 1000)
                return;
            }else{
                return Promise.reject(res)
            }
        })
        .catch(error => alert(Json.stringify(error)))
    }

    function login (data){
        userLogin(data)
        .then((res) =>{
            if(res.ok){
                window.localStorage.setItem("_token" , res.token);

                const decodedToken  = res.token ? jwtDecode(res.token) : null;
                const { user } = decodedToken ? decodedToken.payload : null;

                setCurrentUser(user);
                return navigate("/");

                setTimeout(() => {
                navigate("/login")
                }, 1000)
                return;
            }else{
                return Promise.reject(res)
            }
        })
        .catch(error => alert(JSON.stringify(error)))
    
    }

    const values ={
        register
    }
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children:PropTypes.node.isRequired,
}