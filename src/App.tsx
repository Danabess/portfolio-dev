import { Routes, Route } from 'react-router'

import Header from './header';
import Home from './home';
import Projects from './projects';
import GetInTouch from './get-in-touch';
import Footer from './footer';

export const WebSiteName = "/portfolio-dev"

export default function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path={`${WebSiteName}/`} element={<Home />} />
                <Route path={`${WebSiteName}/projects`} element={<Projects />} />
                <Route path={`${WebSiteName}/get-in-touch`} element={<GetInTouch />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}