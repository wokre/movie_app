import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  //비동기 함수 처리 async, await사용
  getMovies = async() => {
    const {data: { data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies} = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {
              movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))
            }
          </div>
        )}
      </section>
    );
  }
}

export default App;
