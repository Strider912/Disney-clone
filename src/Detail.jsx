import React, { useState,useEffect } from 'react'
import {useParams} from "react-router-dom";
import styled from 'styled-components'
import db from "./Firebase"

const Detail = () => {

    const {id} = useParams();
    const [movie,setmovie ] = useState('') 
    useEffect(() => {

        db.collection("movies").doc(id).get().then((doc)=>{
            if(doc.exists){
            setmovie(doc.data())
            }else{
                
            }
        })

    }, [])
    
    return (

        <Container>
            <Background>
                <img src={movie.backgroundImg} alt="" />
            </Background>
            <ImageTitle>
            <img src={movie.titleImg} alt="" />
            </ImageTitle>
            <Controls>
                <Playbutton>
                <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </Playbutton>
                <Trailerbutton>
                <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </Trailerbutton>
                <Addbutton>
                <span>+</span>
                </Addbutton>
                <Groupwatchbutton>
                <img src="/images/group-icon.png" alt="" />
                </Groupwatchbutton>
            </Controls>
            <SubTitle>
            </SubTitle>
            {movie.subTitle}
            <Description>
            {movie.description}
            </Description>
        </Container>

    )
}

export default Detail

const Container=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vh + 5px);
position: relative;
`

const Background=styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
img{
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
}
`

const ImageTitle=styled.div`
width: 25vw;
height: 25vh;
min-height: 170px;
min-width: 200px;
img{
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
}
`

const Controls=styled.div`
display: flex;
align-items: center;
`

const Playbutton=styled.div`
height: 55px;
font-size: 15px;
margin-right: 22px;
padding: 0 18px;
display: flex;
align-items: center;
letter-spacing: 1.5px;
border: none;
cursor: pointer;
background-color: rgba(249,249,249,0.2);
&:hover{
    background-color: rgba(198,198,198);
}
`
const Trailerbutton=styled(Playbutton)`
background-color: rgba(0,0,0,0.2);
border: 1px solid rgba(249,249,249);
color: rgb(249,249,249);
`

const Addbutton=styled.div`
border-radius: 50%;
border: 1px solid white;
height: 45px;
width: 45px;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.7);
cursor: pointer;
margin-right: 12px;
`
const Groupwatchbutton=styled(Addbutton)`
background-color: rgba(0,0,0);
`

const SubTitle=styled.div`
font-size: 15px;
margin-top: 25px;
`

const Description=styled.div`
font-size: 20px;
margin-top: 15px;
line-height: 1.4;
`