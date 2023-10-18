import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../Styles/Movie.css'

function Movie() {
  const [videos, setVideos] = useState([])
  const [name, setname] = useState('')
  const [simlarvideos, setsimliarvideos] = useState([])
  const [simvideo, setsimvideo] = useState([])
  const [simvido, setsimvido] = useState([])
  const [simmoviename, setsimmoviename] = useState('')
  const location = useLocation()
  console.log(simvido)
  useEffect(() => {
  const movieid = location.state.trailer
  const moviename = location.state.moviename
  const tvshowid = location.state.showes
  setname(moviename)
    const apikeysim = 'f89b235e1c3b074c77c22a21e974d237';
    const apiurlsim = `https://api.themoviedb.org/3/movie/${simvideo}/videos?language=en-US&api_key=${apikeysim}`;
    axios.get(apiurlsim)
      .then((response) => {
        setsimvido(response.data.results);
      })
      .catch((error) => {
        console.error('error fetching videos', error);
      }); 
    const apikey = 'f89b235e1c3b074c77c22a21e974d237';
    const apiurl = `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US&api_key=${apikey}`;
    axios.get(apiurl)
      .then((response) => {
        setVideos(response.data.results);
      })
      .catch((error) => {
        console.error('error fetching videos', error);
      });
      const apikeyshow = 'f89b235e1c3b074c77c22a21e974d237';
      const apiurlshow = `https://api.themoviedb.org/3/tv/${tvshowid}/videos?language=en-US&api_key=${apikeyshow}`;
      axios.get(apiurlshow)
      .then((response) => {
        setVideos(response.data.results);
      })
      .catch((error) => {
        console.error('error fetching videos', error);
      });
}, [location.state.trailer,location.state.moviename, location.state.showes, simvideo]);
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
const onsimclick = (id, name) => {
  setsimvideo(id)
  setsimmoviename(name)
}
let trailer = videos.filter(movie => movie.name === "Official Trailer")
if(simvido.length !== 0){
  trailer = simvido.filter(movie => movie.type === "Trailer")
}
console.log(trailer)
let moviename = name
if(simvideo.length !==0){
  moviename = simmoviename
} 
  return (
    <div className="movie-container" style={{ width: '100%' }}>
      <div className='button-container'>
        <div className='play-container'>
          <button className='buttonscont'>Play</button>
          <button className='buttonscont'>+ My LIst</button>
          <button className='buttonscont'>More Info</button>
        </div>
      </div>
      <h2 style={{ color: 'white', textAlign: 'center' }}>{moviename}</h2>
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
      <div className='similar-movie-container'>
        <h2 style={{ color: 'white' }}>Similar Movies</h2>
        <div className="similar-poster-container">
          {simlarvideos.map((movie) => (
            <div className="similar-movie-card" key={movie.id}>
              <div className="similar-movie-poster">
                <h2 style={{ color: 'white', marginBottom: '10px' }}>{movie.title}</h2>
                <div className="image-container">
                  <img
                    width={300}
                    onClick={() => onsimclick(movie.id, movie.title)}
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <p style={{ color: 'white', marginTop: '10px' }}>{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  </div>
  
  );
}

export default Movie;
