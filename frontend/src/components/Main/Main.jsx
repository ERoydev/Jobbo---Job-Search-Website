// COMPONENTS IMPORTS
import HeadBanner from './HeadBanner';
import Steps from './Steps';
import Categories from './Categories';
import Cv from './Cv';
import AboutUs from './Aboutus';

import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import SearchCriteriaContext from '../../contexts/SearchCriteriaContext';

export default function Main () {
    const { SearchFormSearchHandler } = useContext(SearchCriteriaContext);

    return (
        <main className="site-main">
            <HeadBanner SearchFormSearchHandler={SearchFormSearchHandler} />

            <Steps />

            <Categories SearchFormSearchHandler={SearchFormSearchHandler}/>

            <Cv />

            <AboutUs />
        </main>

    );
}