import React, { useState, useEffect } from 'react'
import '../Styles/Tvshowes.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Tvshowes() {
    const [tvshow, settvshow] =useState([])
    const [showid, setshowid] =useState([])
    useEffect(()=>{
        const apikey='f89b235e1c3b074c77c22a21e974d237'
        const apiurl = `https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${apikey}`;
        axios.get(apiurl)
        .then((response)=>{
            settvshow(response.data.results)
        })
        .catch((error)=>{
            console.error('error from tvshowes.js', error)
        })
    }, [])
    console.log(tvshow)
    const navigate = useNavigate()
    const ontvshow = (id) => {
        setshowid(id)
        navigate('/movies', {state: {showes: id}})
    }
    console.log(showid)
  return (
    <div className='tvshow-container'>
        <h2 style={{ color: 'white' }}>Tv Showes</h2>
        <div className='show-container'>
            {tvshow.map((show)=>(
                <div className='show-poster' onClick={() => ontvshow(show.id)}>
                    <h2>{show.name}</h2>
                    <img width={300} src={`https://image.tmdb.org/t/p/w500/${show.backdrop_path}`} alt={show.title} />
                    {/* <p>{show.overview}</p> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tvshowes