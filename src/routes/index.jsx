
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "../pages/NotFound";
import  Home  from "../pages/Home";
import SignIn from "../components/User/SignIn";
import SignUp from "../components/User/SignUp";
import { ProtectedRoute } from "./ProtedtedRoute";

export default function AppRoutes() {
    return (
    <Router>
        <Routes>
        <Route path= "/login" element={<SignIn />} />      
        <Route path= "/register" element={<SignUp />} />      
        <Route path= "/" element={<ProtectedRoute />} >
            <Route path= "/" element={<Home />} />
        </Route>
        <Route path= "*" element={<NotFound />} />      
        </Routes>
    </Router>
    )
}