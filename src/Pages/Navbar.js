import React from 'react'
import netflix from '../assets/netflix.png'
import '../Styles/Navbar.css'
import {GoSearch} from 'react-icons/go'
import {FiGift} from 'react-icons/fi'
import {BiSolidBellRing} from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Navbar({
    data,
}) {
  return (
    <div className='container'>
      <div className='nav-container'>
      <img src={netflix} alt='netflix' height={50}/>
     {
        data.map(item=>{
            return (
              <Link className='link' to={item.path}>{item.name}</Link>
            )
        })
     }
      </div>
      <div className='btn-cont'>
        {/* <div className='button-container'>
            <Link to='/search'><GoSearch/>search</Link>
            <span>KIDS</span>
            <span>DVD</span>
            <span><FiGift/></span>
            <span><BiSolidBellRing/></span>
        </div> */}
        <div className='button1-cont'>
            <Link to='/search'><GoSearch/>search</Link>
            <span>KIDS</span>
            <span>DVD</span>
            <span><FiGift/></span>
            <span><BiSolidBellRing/></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar