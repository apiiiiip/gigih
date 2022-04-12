import {useState, useEffect} from 'react'

function Trendingpage() {
    
    const [trendingData, setTrendingData] = useState([])

    const handleTrending = async() => {
        await fetch(
            `https://api.giphy.com/v1/gifs/trending?api_key=YO4YioSM96mNcIXw257555iXcp4iIm9U&limit=12&rating=g`
            )
                .then((response) => response.json())
                .then((trendData) => setTrendingData(trendData.data)
                )
    }

    useEffect(() => {
        handleTrending()}, [])
        console.log(trendingData)
  return (
    <div>
    {trendingData.map((gif) => (
        <div key={gif.id}>
            <p>{gif.title}</p>
            <img src={gif.images.original.url} alt="foto animasi"/>

        </div>
    ))}
</div>
  )
}

export default Trendingpage