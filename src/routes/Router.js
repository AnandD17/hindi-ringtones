import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import About from '../pages/About/About';
import Description from '../pages/Description/Description';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';

const Router = () => {

    const RouteWithRole = ({ Element }) => {
        return (
          <div className='bg-[#FCFCFC]'>
          <Layout>
            <Element/>
          </Layout>
          </div>
        );
      }

  return (
    <div>
        <Routes>
            <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
            <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
            <Route exact path={ROUTES.Ringtone} element={<RouteWithRole Element={Description} />}></Route>
        </Routes>
    </div>
  )
}

export default Router