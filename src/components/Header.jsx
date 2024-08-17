import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = ({searchTerm, setSearchTerm}) => {
  return (
   <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
       <span className='text-slate-800 font-extrabold'>E-Commerce</span>
       <span className='text-slate-500 font-extrabold'>Products</span>
       </h1>
       <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
       <input 
        type='text'
        placeholder='Search Products...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='bg-transparent focus:outline-none w-24 sm:w-64 md:w-40'
    />
    <FaSearch className='text-slate-600 '/>
       </form>
    </div>
   </header>
  )
}

export default Header