import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import menusData from './app/data.json';
import './style/normalize.css';
import './style/main.scss';
import Header from './components/Header';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/'
          element={<Home data={menusData} />}
        />
        {/* <Route exact path='/profil'
          element={<Profil />}
        />
        <Route exact path='/projects'
          element={<Projects />}
        />
        <Route exact path='/projects/:id'
          element={<ProjectDetails />}
        />
        <Route exact path='*'
          element={<Error />}
        /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  </React.StrictMode>
);

