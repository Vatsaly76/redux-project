import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react';

const ResultGrid = () => {

  const dispatch = useDispatch();
  const { query, activeTab, loading, error, results } = useSelector((store) => store.search);

  useEffect(function () {
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
          data = response.results.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.video_files[0].quality,
            url: item.video_files[0].link,
            photographer: item.user.name
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
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
    <div>
      {results.map((item) => {
        return item.title
      })}
    </div>
  )
}

export default ResultGrid
