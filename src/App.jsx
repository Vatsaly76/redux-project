import { fetchPhotos } from './api/mediaApi'

const App = () => {
  return (
    <div className="h-screen w-full bg-[#222]">
      <h1 className="text-4xl font-bold text-white bg-amber-300">Redux Project</h1>
      <button className='px-2 bg-amber-600 border-amber-50' 
        onClick={async()=>{
         const data = await fetchPhotos('nature')
         console.log(data);
      }}>Show Photos</button>
    </div>
  )
}

export default App
