import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('') 

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(setQuery(text));
        console.log("Searching for:", text);

        setText('');
    }
  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 py-8'>
      <form className='flex gap-4 justify-center items-center max-w-2xl mx-auto px-4' onSubmit={handleSubmit}>
        <input 
          value={text}
          onChange={(e)=>{setText(e.target.value)}}
          className='flex-1 border-2 border-gray-600 px-6 py-3 text-lg text-white rounded-xl outline-none bg-[#333] focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all duration-200'
          required 
          type="text" 
          placeholder="Search Anything....." 
        />
        <button 
          className='px-8 py-3 text-lg font-semibold bg-gray-600 text-white rounded-xl hover:bg-green-400 cursor-pointer active:scale-95 transition-all duration-200 shadow-lg'
          type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
