import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/Auth/OAuth2";

function AuthRoute() {
    const location = useLocation();
    const navigate = useNavigate();
    const {pathname} = location;

    useEffect(() => {
        if (pathname === "/") {
            navigate("/auth/login");
        }
    }, [pathname]);
    return <Routes>
        <Route path="/" element={<></>} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login/oauth2" element={<OAuth2 />} />
        <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
}

export default AuthRoute;