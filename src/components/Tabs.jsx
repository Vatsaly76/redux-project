import React from 'react'
import { setActiveTabs } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const Tabs = () => {
    const tabs = ['photos', 'videos']
    const dispatch = useDispatch();
    const activetab = useSelector((state) => state.search.activeTab);
    return (
        <div className='flex gap-10 p-5 justify-center items-center text-white'>
            {tabs.map((tab, idx) => (
                <button className={`${(activetab == tab ? "bg-green-400" : "bg-gray-600")} px-5 py-3 rounded-2xl uppercase hover:bg-green-300 cursor-pointer active:scale-95 duration-200`}
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
