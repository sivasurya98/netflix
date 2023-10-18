import React from 'react'
import '../Styles/Login.css'
import { useNavigate  } from 'react-router-dom';
import netflix from '../assets/netflix.png'

function Login({
}) {
    let navigate  = useNavigate();
    const handleClick = () => { 
        navigate('/account');
     }
  return (
    <div>
      <div className="login-container">
        <div className="login-image">
          <img src={netflix} alt='netflix' width={150}/>
        </div>
        <div className="option-container">
          <div>
            <select className='language-cont'>
              <option>English</option>
              <option>Tamil</option>
            </select>
          </div>
          <div>
            <button className="button-cont" onClick={handleClick}>Sign In</button>
          </div>
        </div>
      </div>
      <div className="images-container">
        <div className="banner-container">
          <div className="total-container">
            <h1 className="banner-title">Unlimited movies,TV shows and more</h1>
            <div>
              <p className="banner-title1">Watch anywhere. Cancel anytime.Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="input-container">
              <div>
                <input className="email-input"  type='text' placeholder='Enter your email address'/>
              </div>
              <div>
              <button className="button-getstart">Gets Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login