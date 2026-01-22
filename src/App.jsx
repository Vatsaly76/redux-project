
import ResultGrid from './components/ResultGrid'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-gray-900 via-[#222] to-gray-800'>
      <SearchBar />
      <Tabs /> 
      <ResultGrid />     
    </div>
  )
}

export default App
