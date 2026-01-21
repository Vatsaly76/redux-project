import React from 'react'

const ResultCard = (props) => {
  return (
    <div className='w-80 h-60 bg-gray-200 flex rounded-lg overflow-hidden flex-col'>
      {props.item.type === 'photo' && <img src={props.item.url} alt={props.item.title} className="w-full h-40 object-cover" />}
      {props.item.type === 'video' && <video src={props.item.url} controls className="w-full h-40 object-cover" />}
      <h2 className='text-center font-semibold p-2'>{props.item.title}</h2>
    </div>
  )
}

export default ResultCard
