import React, { Component } from 'react';

const movieResult = (props) => {

  let movieTitle = props.userResults.map(movie => {
  return  <div>
            <li>{movie.name}</li>
            <img src = {movie.url} />

          </div>
  })

  return  (
    <ul>
    {movieTitle}
    </ul>
  )

}


export default movieResult
