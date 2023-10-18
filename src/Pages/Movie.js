import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../Styles/Movie.css'

function Movie() {
  const [videos, setVideos] = useState([])
  const [name, setname] = useState('')
  const [simlarvideos, setsimliarvideos] = useState([])
  const [simvideo, setsimvideo] = useState([])
  const location = useLocation()  
  useEffect(() => {
  const movieid = location.state.trailer
  const moviename = location.state.moviename
  setname(moviename)
    const apikey = 'f89b235e1c3b074c77c22a21e974d237';
    const apiurl = `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US&api_key=${apikey}`;
    axios.get(apiurl)
      .then((response) => {
        setVideos(response.data.results);
      })
      .catch((error) => {
        console.error('error fetching videos', error);
      });
}, [location.state.trailer,location.state.moviename ]);
useEffect(() => {
  const movieid = location.state.trailer
  const apikey = 'f89b235e1c3b074c77c22a21e974d237';
  const apiurl = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&api_key=${apikey}`;
  axios.get(apiurl)
  .then((response) => {
    setsimliarvideos(response.data.results)
  })
  .catch((error=>{
    console.error('error fetching simliar videos', error)
  }))
}, [location.state.trailer])
const onsimclick = (id) => {
  setsimvideo(id)
}
console.log(simvideo)
const trailer = videos.filter(movie => movie.name === "Official Trailer")
  return (
    <div className="movie-container" style={{ width: '100%' }}>
      <div className='button-container'>
        <div className='play-container'>
          <button className='buttonscont'>Play</button>
          <button className='buttonscont'>+ My LIst</button>
          <button className='buttonscont'>More Info</button>
        </div>
      </div>
      <h2 style={{ color: 'white', textAlign: 'center' }}>{name}</h2>
    {trailer.map((video) => (
      <div key={video.key} className="teaser-video">
       <iframe
        title={name}
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${video.key}?si=ITbaQh8YOLfWWX44&autoplay=1&controls=0&modestbranding=1&showinfo=0`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen style={{display: 'block', objectFit: 'cover'}}
      ></iframe>
      </div>
    ))}
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className='home-container'>
    <h2 style={{ color: 'white' }}>simliar Movies</h2>
      <div className="movie-poster-container">
          {simlarvideos.map((movie) => (
            <div className="movie-card">
              <div key={movie.id} className="movie-poster">
                <h2>{movie.title}</h2>
                <img width={300} onClick={()=> onsimclick(movie.id)} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                <p style={{ color: 'white' }}>{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  
  );
}

export default Movie;
