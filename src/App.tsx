import { Routes, Route, useLocation } from 'react-router'

import Header from './header';
import Home from './home';
import Projects from './projects';
import GetInTouch from './get-in-touch';
import Footer from './footer';

export const WebSiteName = "/portfolio-dev"

export default function App() {
    const location = useLocation();
    const hideFooter = [`${WebSiteName}/get-in-touch`].includes(location.pathname);

    return (
        <>
            <Header></Header>
            <Routes>
                <Route path={`${WebSiteName}/home`} element={<Home />} />
                <Route index={true} path={`${WebSiteName}/projects`} element={<Projects />} />
                <Route index={true} path={`${WebSiteName}/get-in-touch`} element={<GetInTouch />} />
            </Routes>
            {!hideFooter && <Footer></Footer>}
        </>
    )
}