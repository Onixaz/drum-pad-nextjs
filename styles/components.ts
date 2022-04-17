import styled from 'styled-components'


export const Container = styled.main`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Title = styled.h1`

font-size: 30px;
letter-spacing: 1px;
color: #fff;
margin: 2rem;
`

export const Display = styled.h1`
margin: 3rem 1rem;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 200px;
height: 60px;
padding: 10px 35px;
font-size: 15px;
color: #fff;
font-weight: 400;
background-image: linear-gradient(lightgreen, green);
border-radius: 5px;

`

export const Grid = styled.div`

  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  grid-template-columns: repeat(3, 1fr);

`
export const Link = styled.a`
  color: #fff;
  margin: 2rem;
  opacity: 0.8;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: lightgreen;
  }
`

export const Button = styled.button`
    position: relative;
	display: inline-block;
	padding: 30px 35px;
    border-radius: 10px;
    border: none;
    outline: none;
	background-image: radial-gradient(lightgreen, green);
    box-shadow: 0px 1px 4px -2px #333;
    text-shadow: 0px -1px #333;
	box-shadow: 0 5px 15px rgba(145, 92, 182, .5);
	text-decoration: none;
	color: #fff;
	font-size: 30px;
	font-family: sans-serif;
	font-weight: 100;

    &::after{
	content: '';
    z-index: -1;
    opacity: 0.4;
    transform: rotate(180deg);
	position: absolute;
	top: -3px;
	left: 0;
	width: 100%;
	height: 100%;
    border-radius: 10px;
	background: linear-gradient(rgba(0,255,0,0.1), rgba(0,255,0,1));

    }

    &::before{
	content: '';
    z-index: 1;
	position: absolute;
	bottom: 3px;
	left: 0;
	width: 100%;
	height: 100%; 
    border-radius: 10px;
	background: linear-gradient(rgba(0,255,0,0.3), rgba(255,255,255,0.1));

    }

    &:hover {
        transform: translate(0, 0.01em);
        &::before {
        box-shadow: 0 0 0 2px rgba(0,255,0,0.1), 0 0.125em 0 0 rgba(0,255,0,0.1);
    }
}
`