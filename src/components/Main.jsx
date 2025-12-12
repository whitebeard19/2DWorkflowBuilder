import React from 'react'
import Header from './Header';
import Canvas from './Canvas';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <>
        <div className='h-screen w-screen flex flex-col'>
            <Header />

            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <Canvas />
            </div>
        </div>
    </>
  )
}

export default Main