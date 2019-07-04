import React from 'react';
import Headers from './components/header'
import NavBar from './components/navbar'
import Containers from './components/container/container'


const Main = () => {
    return (
        <div>
          <NavBar></NavBar>
          <Headers></Headers>
          <Containers></Containers>
        </div>
    )
}

export default Main