import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';
import moneyheist from '../assets/money heist.mp4'

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const apikey = 'f89b235e1c3b074c77c22a21e974d237';
    const apiurl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apikey}`;

    axios.get(apiurl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('error fetching movies', error);
      });
  }, []);
  console.log(movies)
  const navigate = useNavigate()
  const movieshow = (movieid, movietitle) => {
    navigate('/movies', { state: { trailer: movieid, moviename :movietitle } })
  }
  return (
    <div className='home-container'>
      <video
      className='trailer'
        autoPlay
        loop
        >
         <source src={moneyheist} type="video/mp4" />
      </video>
      <div className='button-container'>
        <div className='play-container'>
          <button className='buttonscont'>Play</button>
          <button className='buttonscont'>+ My LIst</button>
          <button className='buttonscont'>More Info</button>
        </div>
      </div>
      <h1>Popular Movies</h1>
      <div className="movie-poster-container">
        {console.log(movies)}
        {movies.map((movie) => (
          <div className="movie-card">
            <br />
            <br />
            <br />
            <br />
            <div key={movie.id}>
              <h5>{movie.title}</h5>
              <img className="movie-poster" onClick={() => movieshow(movie.id, movie.title)} width={300} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
              <h6>{`Movie-rating-${movie.vote_average}`}</h6>
              {/* <p>{movie.overview}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home