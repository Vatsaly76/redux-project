import { useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react';

const ResultGrid = () => {
  const { query, activeTab, loading, error, results } = useSelector((store) => store.search);

useEffect(function () {
  const getData = async () => {
    let data;
    if (activeTab === 'photos') {
      let response = await fetchPhotos(query);
      data = response.results.map((item)=>({
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
    console.log(data);
  }
  getData()
}, [query, activeTab]);
return (
  <div>

  </div>
)
}

export default ResultGrid
