import styled from 'styled-components'
import {Link} from 'react-router-dom'


const MenuStyles = styled.div`



button {
    height:2rem;
        margin: 1rem 0.5rem;
        font-family: 'Montserrat', sans-serif;
        font-weight:300;
        border:none;
        background-color:transparent;
        box-shadow: 2px 2px rgba(0,0,0,0.2);
        border-radius:0.6rem;
        
        cursor: pointer;

        :hover {
            background-color:rgba(0,0,0,0.1);
        }
}
`

const Menu = () => {
    return (
        <MenuStyles>
            <Link to="/register"><button>Cadastrar Usuários</button></Link>
            <Link to="/users"><button>Listar Usuários</button></Link>
        </MenuStyles>
    )
}

export default Menu;