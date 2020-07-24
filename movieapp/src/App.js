import React, {useState, useEffect} from 'react';
import './App.css';
// import { render } from '@testing-library/react';

function App() {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState([])
  const [buscar, setBusca] = useState('')
  const [idBtn, setIdBtn] = useState(1)

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/'

  const url = `https://api.themoviedb.org/3/search/movie?api_key=4a5e130486cb63a2caff652d783f6a36&query=${idBtn}`

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const getMovies = data.results
        console.log(getMovies)
        setSearchMovie(getMovies)
      })
  }, [idBtn])

  // const findMovie = value => {
  //   const url = `${url}`
  // }


  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4a5e130486cb63a2caff652d783f6a36')
     .then(response => response.json())
     .then(data => {
       const upcomingMovies = data.results
       setUpcomingMovies(upcomingMovies)
     })
  }, [])

  
  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4a5e130486cb63a2caff652d783f6a36')
     .then(response => response.json())
     .then(data => {
       const popularMovies = data.results
       setPopularMovies(popularMovies)
     })
  }, [])

  const handleCick = (e) => {
    setIdBtn(buscar)
    // e.stopPropagation();
  }

  
  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4a5e130486cb63a2caff652d783f6a36')
     .then(response => response.json())
     .then(data => {
       const topRatedMovies = data.results
       setTopRatedMovies(topRatedMovies)
     })
  }, [])

  
  // console.log(upcomingMovies)
  return (
    <div className="App">
      {/* <pre>{JSON.stringify(items.results)}</pre> */}
      {/* <h1>{items.title}</h1>
      <img src={IMAGE_URL + items.poster_path}></img> */}
      <div className="searchMovies">
        <form action="">
          <input type="text" id = {buscar} onKeyDown={event => setBusca(event.target.value)} placeholder="Search a movie"/>
          <button type = "button" onClick = {handleCick}>Search</button>
        </form>
        {searchMovie.map(movie => {
            return <img src={IMAGE_URL + movie.poster_path} id={movie.id} key={movie.id} alt="movie"/>
         })}
      </div>


      <div className="upcomingMovies">
        <h1>Upcoming Movies</h1>
         {upcomingMovies.map(movie => {
            return <img src={IMAGE_URL + movie.poster_path} id={movie.id} key={movie.id} alt="movie"/>
         })}
      </div>

      <div className="popularMovies">
        <h1>Popular Movies</h1>
         {popularMovies.map(movie => {
            return <img src={IMAGE_URL + movie.poster_path} id={movie.id} key={movie.id} alt="movie"/>
         })}
      </div>

      <div className="topRatedMovies">
        <h1>Top Rated Movies</h1>
         {topRatedMovies.map(movie => {
            return <img src={IMAGE_URL + movie.poster_path} id={movie.id} key={movie.id} alt="movie"/>
         })}
      </div>

    </div>
  );
}

export default App;
