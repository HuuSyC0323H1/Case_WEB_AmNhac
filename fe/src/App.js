import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login-Register/Login';
import Register from './pages/Login-Register/Register';
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}></Route>
            </Routes>
        </>
    );
}

export default App;
