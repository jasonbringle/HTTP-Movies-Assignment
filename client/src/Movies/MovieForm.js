import React from 'react';
import { FormDiv, FormHolder } from '../Styled'

export default function MovieForm(){
    return(
        <FormHolder>
            <FormDiv>
                <input placeholder="Movie Title"/>
                <input placeholder="Director"/>
                <input placeholder="Metascore"/> 
            </FormDiv>
        </FormHolder>
    )
}