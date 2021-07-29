import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


function App() {
    const routes = useRoutes(false)
    return (
        <Router>
            <Header />
            <main className="container mx-auto px-6 dark:text-white">
                {routes}
            </main>
            <Footer />
        </Router>
    );
}

export default App;
