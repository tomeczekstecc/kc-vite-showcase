import {useEffect, useState, useRef} from "react";
import Keycloak from "../../kc"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const isRunning = useRef(false);
    useEffect(() => {
        if (isRunning.current) return;
        isRunning.current = true;
        Keycloak.init({onLoad: 'login-required'}).then(authenticated => setIsAuthenticated(authenticated))
    }, []);

    const login = () => {
        Keycloak.login().then(() => setIsAuthenticated(true));
    }

    const logout = () => {
        Keycloak.logout().then(() => setIsAuthenticated(false));
    }

    return {isAuthenticated, login, logout};
}

export default useAuth;
