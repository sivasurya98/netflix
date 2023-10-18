import React from 'react'
import netflix from '../assets/netflix.png'
import '../Styles/Account.css'

function Account({
    setIsLoggedIn,
}) {
    const onlinkclick = () => {
        setIsLoggedIn(true)
    }
  return (
    <div>
      <div className="login-image">
      <img src={netflix} alt='netflix' width={150}/>
      </div>
      <div className="total-image-container">
        <div>
            <p className='question-para'>Who's Watching ?</p>
        </div>
        <div className="account-img-container">
            <div className='watching-container'>
              <div>
                <a href='/home' onClick={onlinkclick}>
                  <img
                  src="https://netflsix.web.app/static/media/profile2.846a1deff6d18a96c3a9.jpg"
                  alt='img' width={120}
                  />
                </a>
               </div>
               <div>
                <p style={{ color: 'white', textAlign: 'center' }}>Surya Prakash</p>
               </div>
            </div>
            <div className='watching-container'>
              <div>
                <a href='/home' onClick={onlinkclick}>
                  <img
                  src="https://netflsix.web.app/static/media/profile3.30af1230c82c3f546cef.jpg"
                  alt='img' width={120}
                  />
                </a>
               </div>
               <div>
                <p style={{ color: 'white',  textAlign: 'center' }}>Vignesh</p>
               </div>
            </div>
            <div className='watching-container'>
              <div>
                <a href='/home' onClick={onlinkclick}>
                  <img
                  src="https://netflsix.web.app/static/media/profile2.846a1deff6d18a96c3a9.jpg"
                  alt='img' width={120}
                  />
                </a>
               </div>
               <div>
                <p style={{ color: 'white', marginLeft: '10px', textAlign: 'center' }}>Monish</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Account