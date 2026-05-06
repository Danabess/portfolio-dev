import { Routes, Route, useLocation, Navigate } from 'react-router'
import { useLayoutEffect } from 'react';
import type { ReactNode } from 'react';



import Header from './header';
import Home from './home';
import Projects from './projects';
import GetInTouch from './get-in-touch';
import Footer from './footer';
import CurrentItem from './CurrentItem';



const Wrapper = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

export default function App() {
    const location = useLocation();
    const hideFooter = [`/get-in-touch`].includes(location.pathname);

    return (
        <>
            <Header></Header>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path={`/home`} element={<Home />} />
                    <Route path={`/projects`} element={<Projects />} />
                    <Route path={`/projects/:video_id`} element={<CurrentItem />} />
                    <Route path={`/get-in-touch`} element={<GetInTouch />} />
                </Routes>
            </Wrapper>
            {!hideFooter && <Footer></Footer>}
        </>
    )
}