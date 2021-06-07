import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoone src="images/cta-logo-one.svg" />
        <Signup>GET ALL THERE</Signup>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets
        </Description>
        <CTALogotwo src="images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vh + 5px);
position: relative;
display: flex;
align-items: center;
justify-content: center;
&:before{
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
background-image: url("/images/login-background.jpg");
position: absolute;
content: "";
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
}
`
const CTA = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 650px;
padding: 80px 40px;
`

const CTALogoone = styled.img``

const CTALogotwo = styled.img`
width: 90%;
`
const Signup = styled.a`
background-color: #0063e5;
width: 100%;
padding: 15px 0px;
border: none;
border-radius: 6px;
text-align: center;
margin: 10px;
transition: all 250ms;
cursor: pointer;
:hover{
    background-color: #0483ee;
}
`
const Description = styled.div`
font-size: 11px;
line-height: 1.5;
letter-spacing: 1.5px;
margin-bottom: 10px;
`
