import React, { useEffect, useState } from 'react'
import '../Styles/Search.css'
import {GoSearch} from 'react-icons/go'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


// https://api.themoviedb.org/3/search/movie?query=hello+%20%27&api_key=f89b235e1c3b074c77c22a21e974d237

function Search() {
  const [movies, setmovies] = useState([])
  const [inputValue, setInputValue] = useState('')
const handleinputchange = (e) => {
  const newvalue = e.target.value
  setInputValue(newvalue)
  console.log(newvalue)
}
  useEffect(()=> {
    const apiKey = 'f89b235e1c3b074c77c22a21e974d237'
    const apiurl = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=${apiKey}`;

    axios.get(apiurl)
    .then((responce)=> {
      setmovies(responce.data.results);
    })
    .catch((error)=> {
      console.error('error in search/js', error)
    })
  }, [inputValue])
  const navigate = useNavigate()
  const movieshow = (movieid, movietitle) => {
    navigate('/movies', { state: { trailer: movieid, moviename :movietitle } })
  }
  return (
    <div>
      <div className='total-search'>
        <div className='search-item'>
          <div className='icon'>
            <GoSearch size={20} color='white'/>
          </div>
          <div>
            <input className='input-box' placeholder='Search' type='text' onChange={handleinputchange}/>
          </div>
        </div>
      </div>
      <div className='show-container'>
        <select className='language-cont'>
          <option>Movie</option>
          <option>Tvshowes</option>
        </select>
      </div>
      <h2 style={{ color: 'white' }}>Result: {inputValue}</h2>
      <div className='movie-poster-container'>
        {movies.map((movie) => (
          <div className="movie-card">
            <div key={movie.id} className="movie-poster" onClick={() => movieshow(movie.id, movie.title)}>
              <h2 style={{ color: 'white' }}>{movie.title}</h2>
              <img width={300} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
              <h6 style={{ color: 'white' }}>{`Movie-rating-${movie.vote_average}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search