import React from 'react'
import { setActiveTabs } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Tabs = () => {
    const tabs = ['photos', 'videos']
    const dispatch = useDispatch();
    const activetab = useSelector((state) => state.search.activeTab);
    return (
        <div className='flex gap-6 py-6 justify-center items-center text-white bg-gray-900/50'>
            {tabs.map((tab, idx) => (
                <button 
                    className={`${activetab === tab ? "bg-green-400 text-gray-900 shadow-lg scale-105" : "bg-gray-700 text-white hover:bg-gray-600"} px-8 py-3 rounded-xl uppercase font-semibold cursor-pointer active:scale-95 transition-all duration-200`}
                    key={idx}
                    onClick={() => {
                        dispatch(setActiveTabs(tab))
                    }}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs
