import React, { useState } from 'react';
import { FormDiv, FormHolder } from '../Styled';
import axios from 'axios';

export default function MovieForm(){
    const [ updatedMovie, setUpdatedMovie ] = useState({
        title: "",
        director: "",
        metascore: '',
        stars: []
    })

    const handleChange = e =>  {
        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.value
            }
        )
    }

    const submitMovieEdit = e => {
        e.preventDefault();
            axios
            .put(`http://localhost/5000/api/movies/${updatedMovie.id}`, updatedMovie)
            .then(res => console.log(res))
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