import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'

const NewUserStyles = styled.div`
width:auto;
height:80vh;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat', sans-serif;
font-weight:300;

div {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin: 0 0 10rem 0;
    font-family: 'Montserrat', sans-serif;
    font-weight:300;

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
        margin: 1rem 0 0 0;
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
}
`

const NewUser = () => {

    const [user, setUser] = useState()
    const [email, setEmail] = useState()


    const registerUser = () => {

        if (typeof user !== 'string' && typeof email !== 'string' ) {
             alert('Favor inserir nome e email.')
        } else if (user.length < 4 && email.length < 6) {
            alert('Favor um email ou nome válido')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:8080/api/add',
                data: {
                  name: user,
                  email: email
                }
              });
    
              alert(`${user}, cadastrado com sucesso!`)
    
              setUser("")
              setEmail("")
        }
    }

    return (
        <NewUserStyles>
            <div>
            <input
            value={user}
            type="text"
            placeholder="Digite o Usuário"
            onChange={e=>setUser(e.target.value)}            
            ></input>      
            <input
            value={email}
            type="text"
            placeholder="Digite o email"
            onChange={e=>setEmail(e.target.value)}
            ></input>
            <button
            onClick={registerUser}
            >Cadastar</button>    
            </div>
        </NewUserStyles>
    )
}

export default NewUser;