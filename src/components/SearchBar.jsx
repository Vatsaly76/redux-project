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
    <div>
      <form className='flex bg-gray-800 gap-5 p-5 justify-center items-center' onSubmit={handleSubmit}>
        <input 
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        className='border-2 px-4 py-2 text-xl text-white rounded-xl outline-none bg-[#333]'
         required type="text" placeholder="Search Anything....." />
        <button className='px-4 py-2 text-xl font-semibold bg-gray-500 rounded-2xl hover:bg-green-300 cursor-pointer active:scale-95 duration-200'
         type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
