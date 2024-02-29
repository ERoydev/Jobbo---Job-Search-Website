// COMPONENTS IMPORTS
import HeadBanner from './HeadBanner';
import Steps from './Steps';
import Categories from './Categories';
import Cv from './Cv';
import AboutUs from './Aboutus';

import { Routes, Route } from 'react-router-dom';

export default function Main () {
    return (
        <main className="site-main">
            <HeadBanner />


            <Steps />

            <Categories />

            <Cv />

            <AboutUs />
        </main>

    );
}