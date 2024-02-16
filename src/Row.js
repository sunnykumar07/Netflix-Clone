import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from "./axios"

function Row({title, fetchUrl, IsLargeRow = false}) {
 
    const [movies, setMovies] = useState([]);  // State variable to store the movies data  
    
    const base_url =  "https://image.tmdb.org/t/p/original/"; // The base url
    useEffect(() => {
        async function fetchData() {
            console.log("$@$@#$",fetchUrl)
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);  
    
    console.log(movies);// Use effect is a hook provided by react that allows us to run some}

    return (
    <div className='row'>
        <h2>
            {title}
        </h2>
        <div className='row-posters'>
            {movies.map((movie) => 
                (IsLargeRow && movie.poster_path) ||
                (!IsLargeRow && movie.backdrop_path &&(
                    <img 
                    className={`row-poster ${IsLargeRow && "row-posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${
                        IsLargeRow ? movie?.poster_path : movie?.backdrop_path
                    }`}
                    alt={movie.name} />
                ))
            )}
        </div>
        
    </div>
  )
}

export default Row