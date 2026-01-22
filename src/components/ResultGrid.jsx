import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react';
import ResultCard from './ResultCard';

const ResultGrid = () => {

  const dispatch = useDispatch();
  const { query, activeTab, loading, error, results } = useSelector((store) => store.search);

  useEffect(function () {
    if (!query) return; // Don't fetch if query is empty
    
    const getData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];
        if (activeTab === 'photos') {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            url: item.urls.small,
            photographer: item.user.name
          }));
        }
        if (activeTab === 'videos') {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.video_files[0].quality,
            url: item.video_files[0].link,
            photographer: item.user.name
          }));
        }
        dispatch(setResults(data));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError(error.message));
      } 
    }
    getData()
  }, [query, activeTab, dispatch]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }
  if (loading) {
    return <div className="text-center">Loading...</div>
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 max-w-[1600px] mx-auto">
      {results.map((item, index) => (
        <ResultCard key={item.id || index} item={item} />
      ))}
    </div>
  )
}

export default ResultGrid
