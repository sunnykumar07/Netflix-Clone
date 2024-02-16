import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './axios'
import requests from './Request'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ],
      )
        }
        fetchData()
    }, [])
    
    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
      }

  return (
    <header
      className="banner"    
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div class="banner-contents">
        <h1 className="name">{movie?.name || movie?.original_name }</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(
            `${movie?.overview}`,
            150,
          )}
        </h1>
      </div>

      <div className="banner-fadeBottom" />

    </header>
  )
}

export default Banner;