import { Routes, Route, useLocation } from 'react-router'
import { useLayoutEffect } from 'react';


import Header from './header';
import Home from './home';
import Projects from './projects';
import GetInTouch from './get-in-touch';
import Footer from './footer';
import CurrentItem from './CurrentItem';


export const WebSiteName = "/portfolio-dev"

const Wrapper = ({ children }: { children: any }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

export default function App() {
    const location = useLocation();
    const hideFooter = [`${WebSiteName}/get-in-touch`].includes(location.pathname);

    return (
        <>
            <Header></Header>
            <Wrapper>
                <Routes>
                    <Route path={`${WebSiteName}/home`} element={<Home />} />
                    <Route path={`${WebSiteName}/projects`} element={<Projects />} />
                    <Route path={`${WebSiteName}/projects/:video_id`} element={<CurrentItem />} />
                    <Route path={`${WebSiteName}/get-in-touch`} element={<GetInTouch />} />
                </Routes>
            </Wrapper>
            {!hideFooter && <Footer></Footer>}
        </>
    )
}