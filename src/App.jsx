import { useEffect, useState } from 'react'
import movies from './data/movies.'

function App() {

  const [moviesList, setMoviesList] = useState(movies);
  const [searchMovies, setSearchMovies] = useState(moviesList);
  const [searchGenre, setSearchGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {

    let results = moviesList;

    if (searchGenre !== '') {
      results = results.filter(movie => movie.genre === searchGenre)

    }

    if (searchTitle !== '') {


      results = results.filter(movie => {

        const titleLow = movie.title.toLowerCase();
        return titleLow.includes(searchTitle)
      })


    }


    setSearchMovies(results)

  }, [searchGenre, searchTitle, moviesList])

  return (
    <>
      <div className='container'>
        <div>
          <h1>Movies List</h1>
        </div>

        <section>
          <h2>Cerca Films</h2>
          <label>Cerca per genere</label>
          <div>
            <select value={searchGenre} onChange={(e => setSearchGenre(e.target.value))}>
              <option value=''>---</option>
              <option>Fantascienza</option>
              <option>Thriller</option>
              <option>Romantico</option>
              <option>Azione</option>
            </select>
          </div>
        </section>

        <section>
          <label>Cerca per titolo</label>
          <div><input type="text" value={searchTitle} onChange={(e => setSearchTitle(e.target.value))} /></div>
        </section>

        {searchMovies.map((movie, i) => <section key={i}>
          <h4>{movie.title}</h4>
          <p>{movie.genre}</p>
        </section>)}
      </div>
    </>
  )
}

export default App
