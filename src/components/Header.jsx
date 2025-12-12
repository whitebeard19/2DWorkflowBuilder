import React from 'react'
import { useApp } from '../context/AppContext';
import { ChevronRight } from "lucide-react";


const Header = () => {
  const {currentProject, currentUser, logout} = useApp();

  return (
    <div className='w-full h-14 bg-gray-900 text-white px-6 flex items-center shadow-md'>
      <h1 className='text-xl font-semibold flex items-center gap-2'>Workflow Builder</h1>

      <div className='flex items-center mx-20 ml-30 text-slate-300 text-lg'>
        <span className='hover:text-white cursor-pointer'>Projects</span>
        <span className='mx-2'>/</span>
        <span className='text-white font-medium'>{currentProject?.name || "Untitled Project"}</span>
        
      </div>

      {currentUser && <span className='text-white font-medium text-lg '>Welcome, {currentUser.displayName}</span>}

      <button
          onClick={logout}
          className='px-4 py-2 ml-150
                  bg-white text-indigo-700 font-semibold 
                  rounded-md 
                  shadow-sm hover:shadow-md 
                  hover:bg-red-100 
                  transition-all'
      >
          Logout
      </button>
    </div>
  )
}

export default Header;