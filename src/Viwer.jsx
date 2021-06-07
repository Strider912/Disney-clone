import React from 'react'
import styled from 'styled-components'

const Viwer = () => {

    return (

        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt="" />
            </Wrap>
        </Container>

    )
}

export default Viwer

const Container=styled.div`
margin-top: 30px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0,1fr));
`
const Wrap=styled.div`
cursor: pointer;
border: 4px solid rgba(249,249,249,0.2);
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
:hover{
    border-color: rgba(249,249,249,0.8);
    transform: scale(1.08);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`
