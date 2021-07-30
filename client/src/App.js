import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { ToastContainer } from 'react-toastify';
function App() {
    const routes = useRoutes(false)
    return (
        <Router>
            <ToastContainer />
            <Header />
            <main className="container mx-auto px-6 dark:text-white">
                {routes}
            </main>
            <Footer />
        </Router>
    );
}

export default App;
