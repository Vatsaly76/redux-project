
import ResultGrid from './components/ResultGrid'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className='h-full w-full bg-[#222]'>
      <SearchBar />
      <Tabs /> 
      <ResultGrid />     
    </div>
  )
}

export default App
