import axios from 'axios';
import { Button, Card, Container, Grid, OutlinedInput } from '@mui/material';
import './App.styled.js';
import { Card1, Card2, InputBuscar, Titulo, ContainerCards, FotoPerfil, ButtonBuscar, NomePerfil, BioPerfil, Repositorios, TodosRepositorios, Titulo2 } from './App.styled.js';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegClone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function App() {

  const [buscar, setBuscar] = useState("");
  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [lista, setLista] = useState([])
  const [carregado, setCarregado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleBuscar = () => {
    axios.get(`https://api.github.com/users/${buscar}`)
      .then(res => {
        setNome(res.data.name);
        setBio(res.data.bio);
        setAvatarUrl(res.data.avatar_url);
        setCarregado(true)
        setErro(false)
        axios.get(`https://api.github.com/users/${buscar}/repos`)
          .then(res => {
            setLista(res.data)
          })
      }).catch((err) => setErro(true))
  }

  return (
    <ContainerCards>
      <Card1>
        <Titulo>Buscador GitHub</Titulo>
        <InputBuscar onChange={(e) => setBuscar(e.target.value)}></InputBuscar>
        <ButtonBuscar onClick={handleBuscar}><CiSearch />Buscar</ButtonBuscar>
      </Card1>


      <Card2>
        {!carregado &&
          <h1>Busque um nome</h1>
        }

        {erro && <h1>Não encontrado</h1>}

        {!erro && carregado && <>
          <FotoPerfil src={avatarUrl} />
          <NomePerfil>{nome}</NomePerfil>
          <BioPerfil>{bio}</BioPerfil>
        </>

        }

      </Card2>

      {!erro && carregado &&
        <Card2>
          <Titulo2>Repositórios:</Titulo2>
          {lista && lista?.map((rep) =>
            <TodosRepositorios key={rep.id}>
              <br></br>
              <Repositorios target='_blank' href={`${rep.html_url}/issues`} >{rep.name.length > 15 ? rep.name.slice(0, 15) + "..." : rep.name}</Repositorios>
              <Repositorios target='_blank' href={`${rep.html_url}/archive/refs/heads/${rep.default_branch}.zip`}><FaRegClone /></Repositorios>
              <Repositorios target='_blank' href={rep.html_url}><FaGithub /></Repositorios>
            </TodosRepositorios>)}
        </Card2>
      }

    </ContainerCards>
  );
}

export default App;
