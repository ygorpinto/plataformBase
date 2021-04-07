import styled from "styled-components";
import {Link} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

const EditStyles = styled.div`
height:60vh;
top:20vh;
position:absolute;
z-index:5;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#fff;
color:rgba(0,0,0,0.5);

input {
        height:2rem;
        width:15rem;
        margin:0.5rem;
        font-family: 'Montserrat', sans-serif;
        font-weight:300;
        border:none;
        box-shadow: 2px 2px rgba(0,0,0,0.2);
        border-radius:0.6rem;
        text-align:center;

        ::placeholder {
            text-align:center;
        }
}

button {
        height:2rem;
        margin: 1rem 0.5rem;
        font-family: 'Montserrat', sans-serif;
        font-weight:300;
        border:none;
        background-color:transparent;
        box-shadow: 2px 2px rgba(0,0,0,0.2);
        border-radius:0.6rem;

        :hover {
            background-color:rgba(0,0,0,0.1);
        }
}

div {
    margin:2rem 0 0 0;
}
`


const Edit = ({user,email}) => {


    const [name,SetUser] = useState(user)
    const [newEmail,setNewEmail] = useState(email)

    const updateItem = () => {
         axios({
                method: 'put',
                url: `http://localhost:8080/api/edit/${user}`,
                data: {
                  name: `${name}`,
                  email: `${newEmail}`
                }
               });
    }

    return (
        <EditStyles>
            Nome:
            <input
            value={name}
            onChange={e=>SetUser(e.target.value)}
            type="text"/>
            Email:
            <input 
            value={newEmail}
            onChange={e=>setNewEmail(e.target.value)}
            type="text"/>
            <div>
            <Link
            to="/users"
            ><button
            onClick={updateItem}
            >Atualizar</button></Link>
            <Link
            to="/users"
            ><button>Voltar</button></Link>
            </div>
        </EditStyles>
    )
}

export default Edit;