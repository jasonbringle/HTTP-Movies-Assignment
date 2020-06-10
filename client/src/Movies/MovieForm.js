import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { FormDiv, FormHolder } from '../Styled';
import axios from 'axios';

const initial = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
    }

export default function MovieForm(props){
    const [ updatedMovie, setUpdatedMovie ] = useState(initial)

    const  id   = useParams();
    console.log(id)
    const { push } = useHistory();

    // const movie = props.movieList.find(
    //     thing => `${thing.id}` === props.match.params.id
    //   );

    const handleChange = e =>  {
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value,
            id: id
            }
        )
    }

    const submitMovieEdit = e => {
        setUpdatedMovie({
            ...updatedMovie,
            id: id
        })
        console.log(updatedMovie)
        e.preventDefault();
            axios
            .put(`http://localhost:5000/api/movies/${id}`, updatedMovie)
            .then(res => push("/"))
            .catch(err => console.error(err.message, err.response))
    }

    return(
        <FormHolder>
            <FormDiv >
                <input onChange={handleChange} name='title' value={updatedMovie.title} placeholder="Movie Title"/>
                <input onChange={handleChange} name='director' value={updatedMovie.director}placeholder="Director"/>
                <input onChange={handleChange} name='metascore' value={updatedMovie.metascore}placeholder="Metascore"/> 
                <button onClick={submitMovieEdit}>Submit Edit</button>
            </FormDiv>
        </FormHolder>
    )
}