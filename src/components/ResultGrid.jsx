import { useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../redux/mediaSlice'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'

const ResultGrid = () => {
    const {query, activeTab, loading, error, results} = useSelector((store)=>store.search);
  return (
    <div>
      
    </div>
  )
}

export default ResultGrid
