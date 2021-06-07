import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { selectMovies } from './features/Movie/movieSlice'
import { useSelector } from 'react-redux'

const Movie = () => {

    const movies=useSelector(selectMovies)

    return (

        <Container>
            <h4>Recommended For You</h4>
            <Content>
            {movies && 
            movies.map((movie)=>(
                <Wrap key={movie.id} >
                    <Link to={`/detail/${movie.id}`} >
                    <img src={movie.cardImg} alt="" />  
                    </Link>
                </Wrap> 
            ))}
            </Content>
        </Container>
        
    )
}

export default Movie

const  Container= styled.div``

const  Content= styled.div`
margin: auto;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0,1fr));
`

const  Wrap= styled.div`
cursor: pointer;
border-radius: 10px;
overflow: hidden;

box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px    ;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;   
}
`
