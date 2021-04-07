import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

const HeaderStyles = styled.header`
height:20vh;
width:100%;
display:flex;
align-items:center;
flex-direction:column;
font-family: 'Montserrat', sans-serif;
font-weight:200;
color:rgba(0,0,0,0.5);

a {
    font-family: 'Montserrat', sans-serif;
    font-weight:200;
    color:rgba(0,0,0,0.5);
    text-decoration:none;
}
`

const Header = () => {
    return (
        <HeaderStyles>
           <Link to="/"><h1>Plataform</h1></Link>
            <Menu/>
        </HeaderStyles>
    )
}

export default Header;