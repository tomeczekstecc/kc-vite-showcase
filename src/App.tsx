import '../App.css'
import useAuth from "./components/hooks/useAuth.tsx";
import Protected from "./components/Protected.tsx";
import Public from "./components/Public.tsx";

function App() {
    const {isAuthenticated,login,logout} = useAuth();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-expect-error
    return  isAuthenticated ? <Protected  logout={logout}/> : <Public login={login} />;

}

export default App
