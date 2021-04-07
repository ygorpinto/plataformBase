import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Edit from '../Edit/Edit'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ListUserStyles = styled.div`
width:auto;
height:80vh;
margin: 5rem 0 0 0;
font-family: 'Montserrat', sans-serif;
font-weight:300;
color:rgba(0,0,0,0.5);

h1 {
    text-align:center;
}

.title {
    margin:0 0 0 7rem;
    display:flex;
    justify-content:space-between;
    width:14%;
    font-weight:600;
}

.actions {
    position:absolute;
    right:0;
    top:43%;
    display:flex;
    width:14%;
    font-weight:600;
}

.main {
    width:100%;
    margin:1rem 0 0 0;
    display:flex;
    justify-content:space-between;
    align-items:center;

    header {

        font-family: 'Montserrat', sans-serif;
        font-weight:300;

        display:flex;
        margin:0 0 0 5rem;

        p {
            font-family: 'Montserrat', sans-serif;
            font-weight:300;
            text-align:center;
            margin:0 2rem;
        }
    }

    button {
        font-family: 'Montserrat', sans-serif;
        font-weight:300;
        margin: 0.5rem;
        border:none;
        background-color:transparent;
        img {
            height:1rem;
            width:1rem;
        }
    }

    .buttons {
        margin:0 5rem 0 0;
    }
}
`
export const ListUserContext = createContext({})

const ListUser = ({ children }) => {


    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        bringData();
    }, [data])


    const bringData = async () => {
        const res = await fetch("http://localhost:8080/api/all")
        const data = await res.json()
        setData(data);
    }

    return (
        <>
            <Router>
                <ListUserStyles>
                <Switch>
                    <Route path="/edit">
                        <Edit 
                        email={email}
                        user={user} />
                    </Route>
                </Switch>
                    <h1>Usuários</h1>
                    <div className="title">
                    <p>Nome</p><p>E-mail</p>
                    </div>
                    <div className="actions">
                        <p>Ações</p>
                    </div>
                    {data.map((item) => {
                        const deleteUser = () => {
                            if (window.confirm(`Você tem certeza que deseja deletar o usuário ${item.name}`)) {
                            axios({
                                method: 'delete',
                                url: `http://localhost:8080/api/del/${item.name}`
                            });
                        }
                        }
                        const updateUser = () => {
                            setUser(item.name)
                            setEmail(item.email)
                        }
                        return (
                            <div className="main">
                                <header>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                </header>
                                <div className="buttons">
                                <Link to="/edit"><button
                                    onClick={updateUser}
                                ><img src="/edit.png"/></button></Link>
                                <button
                                    onClick={deleteUser}
                                ><img src="/trash.png"/></button>
                                </div>
                            </div>
                        )
                    })}
                </ListUserStyles>
            </Router>
        </>
    )
}

export default ListUser;