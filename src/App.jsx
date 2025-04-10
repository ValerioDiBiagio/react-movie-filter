import { useState } from 'react'
import movies from './data/movies.'

function App() {


  return (
    <>
      <div>
        <h1>Movies List</h1>
      </div>
      {movies.map((movie, i) => <section key={i}>
        <h4>{movie.title}</h4>
        <p>{movie.genre}</p>
      </section>)}
    </>
  )
}

export default App
