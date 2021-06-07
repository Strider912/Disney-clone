import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from './Firebase'
import { selectUsername, selectUserphoto, setuserlogin,setsignout } from './features/User/userSlice'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Header = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUsername)
  const userphoto = useSelector(selectUserphoto)

  useEffect(() => {

    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(setuserlogin({
          name : user.displayName,
          email : user.email,
           photo : user.photoURL,
        }))
        history.push("/home")
      }
    } )

  }, [])

  const signin=()=>{

    auth.signInWithPopup(provider).then((result)=>{
      let user = result.user
      dispatch(setuserlogin({
        name : user.displayName,
        email : user.email,
        photo : user.photoURL,
      }))
      history.push("/home")
    })
  }
  const signout=()=>{
    auth.signOut().then(()=>{
        dispatch(setsignout())
        history.push("/")
    })
  }

    return (

        <Nav>
            <Logo src="images/logo.svg" />
            { !username ? 
              ( 
                <LoginContainer>
                <Login onClick={signin} >Login</Login> 
                </LoginContainer>
              ) :
              <>
            <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
            </NavMenu>
            <UserImg  onClick={signout} src={userphoto} />
            </>
            }
        </Nav>

    )
}

export default Header

const Login=styled.div`
border: 1px solid #f9f9f9;
padding: 8px 16px;
background-color: rgba(0,0,0,0.6);
transition: all 0.2s  ease 0s ;
text-transform: uppercase;
letter-spacing: 1.4px;
cursor: pointer;

&:hover{
background-color: #f9f9f9;
color: #000;
border: transparent;
}

`
const  LoginContainer=styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`

const Nav=styled.div`
height: 70px;
background-color: #090b13;
display: flex;
align-items: center;
padding: 0 35px;
`
const Logo=styled.img`
cursor: pointer;
width: 80px;
`

const NavMenu=styled.div`
display: flex;
align-items: center;
flex: 1;
a{
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: auto;
    img{
        height: 20px;
    }
    span{
        font-size: 15px;
        letter-spacing: 1.3px;
        position: relative;
        &:after{
            position: absolute;
            content: "";
            height: 2px;
            background-color: white;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
        }
    }
    :hover{
        span:after{
            opacity: 1;
            transform: scaleX(1.08);
        }
    }
}
`

const UserImg=styled.img`
cursor: pointer;
border-radius: 999px;
height: 50px;
width: 50px;
`