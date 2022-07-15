import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from '../pages/Contactanos.jsx';
import Layout from '../containers/Layout.jsx';
import Encargo from '../pages/Encargo.jsx';
import Home from '../pages/Home.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/encargo' element={<Encargo />} />
                    <Route exact path='/contactanos' element={<Contact />} />
                    <Route path='/*' element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;