import { Routes, Route } from 'react-router'

import Header from './header';
import Home from './home';
import Projects from './projects';
import GetInTouch from './get-in-touch';
import Footer from './footer';


export default function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/get-in-touch" element={<GetInTouch />} />
            </Routes>
            <Footer></Footer>
        </>
    )
}