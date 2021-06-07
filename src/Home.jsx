import React, { useEffect } from 'react'
import ImgSlider from './ImgSlider'
import Viwer from './Viwer'
import Movie from './Movie'
import db from './Firebase'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setMovies } from './features/Movie/movieSlice'


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot)=>{
        let tempmovies = snapshot.docs.map((doc)=>{
            return { id : doc.id, ...doc.data()}
        })
        dispatch(setMovies(tempmovies))
        })
    }, [])

    return (

        <Container>
            <ImgSlider />
            <Viwer />
            <Movie />
        </Container>

    )
}

export default Home

const Container=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vh + 5px);
position: relative;
&:before{
    background: url("/images/home-background.png") center center / cover
    no-repeat fixed ;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
`