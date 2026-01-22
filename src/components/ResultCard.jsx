import React from 'react'

const ResultCard = ({ item }) => {
  return (
    <div className='relative h-80 bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group'>
      <a href={item.url} target='_blank' rel="noopener noreferrer" className='block w-full h-full'>
        {item.type === 'photo' ? (
          <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <video autoPlay loop muted src={item.url} className="w-full h-full object-cover" />
        )}
      </a>

      {/* Dark overlay gradient for text readability */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300'></div>

      <div className='flex justify-between items-center w-full px-4 py-4 absolute bottom-0 text-white z-10'>
        <h2 className='text-base font-semibold capitalize truncate flex-1 mr-3'>
          {item.title || 'Untitled'}
        </h2>
        <button className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 font-medium transition-all duration-200 active:scale-95 whitespace-nowrap'>
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard
