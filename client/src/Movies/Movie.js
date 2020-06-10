import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie(props,{ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push } = useHistory();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const deleteMovie = () => {
    axios
    .delete(`http://localhost:5000/api/movies/${params.id}`,)
    .then(res => push("/"))
    .then(res => props.getMovieList())
    .catch(err => console.log(err.message, err.response))
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      
      <div className="save-button" onClick={saveMovie}>
        Save
      </div>
      <button className="edit-buttion" onClick={()=> { push(`/update-movie/${movie.id}`)}}>
        Edit
      </button>
      <button className="delete-buttion" onClick={deleteMovie}>
        Delete
      </button>
    </div>
  );
}

export default Movie;
