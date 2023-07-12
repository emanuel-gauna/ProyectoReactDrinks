
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "../pages/NotFound";
import  Home  from "../pages/Home";

export default function AppRoutes() {
    return (
        <Router>
        <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "*" element={<NotFound />} />      
        </Routes>
        </Router>
    )
}