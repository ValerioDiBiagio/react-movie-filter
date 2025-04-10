import { useEffect, useState } from 'react'
import movies from './data/movies.'

function App() {

  const [moviesList, setMoviesList] = useState(movies);
  const [searchGenre, setSearchGenre] = useState('');

  useEffect(() => {

    let results = movies;


    if (searchGenre !== '') {
      results = movies.filter(movie => movie.genre.includes(searchGenre))

    } else {

    }
    setMoviesList(results)

  }, [searchGenre, movies])

  return (
    <>
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


      {moviesList.map((movie, i) => <section key={i}>
        <h4>{movie.title}</h4>
        <p>{movie.genre}</p>
      </section>)}
    </>
  )
}

export default App
