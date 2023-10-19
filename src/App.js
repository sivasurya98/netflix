import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import navigation from './utils/data';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Search from './Pages/Search';
import Tvshowes from './Pages/Tvshowes';
import Login from './Pages/Login';
import Account from './Pages/Account';
import React from 'react'
import Movie from './Pages/Movie';
import { useParams } from 'react-router-dom';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isnavbar = window.location.pathname === '/home'
  const { movieid } = useParams()
  console.log(isnavbar, movieid  )
  return (
    <div>
      <Router>
        {isnavbar && <Navbar data={navigation} />}
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/account' element={<Account />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/tvshowes' element={<Tvshowes />} />
          <Route path='/movies' element={<Movie />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
