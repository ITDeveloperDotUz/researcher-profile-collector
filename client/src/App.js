import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";
function App() {
    const {token, login, logout, userId} = useAuth()
    const isLoggedIn = !!token
    const routes = useRoutes(isLoggedIn)

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isLoggedIn
        }}>
            <Router>
                <ToastContainer />
                <Header />
                <main className="container mx-auto px-6 dark:text-white">
                    {routes}
                </main>
                <Footer />
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
