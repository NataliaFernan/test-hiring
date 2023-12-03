import {  styled, OutlinedInput, Card, Container, Grid, Button } from "@mui/material";

export const ContainerCards  = styled(Grid)(({ theme }) => ({
    textAlign: '-webkit-center',
    paddingTop: '2rem', 
    backgroundColor:'#1098F7',
    width:'100% !important',
    height:'100% !important'
}));

export const Titulo  = styled("div")(({ theme }) => ({
    fontSize: '3rem',
    color: 'white'
}));

export const Titulo2  = styled("div")(({ theme }) => ({
    fontSize: '1.8rem',
    color: 'white'
}));

export const InputBuscar  = styled(OutlinedInput)(({ theme }) => ({
    width:'8rem',
    height:'2rem',
    marginTop:'1rem',
    backgroundColor:'white',
    borderRadius: '2rem',
    boxShadow:' 1px 1px black'
}));

export const Card1  = styled(Grid)(({ theme }) => ({
    textAlign: '-webkit-center'
    
}));

export const ButtonBuscar  = styled(Button)(({ theme }) => ({
    color:'black',
    borderRadius:'2rem',
    margin:'1rem',
    backgroundColor: 'white',
    boxShadow: '1px 1px 1px 1px',
    width: '6rem',
    height: '2rem',
    textTransform: 'capitalize'

}));

export const Card2  = styled(Grid)(({ theme }) => ({
    border: '1px solid black',
    borderRadius: '1rem',
    margin: '2rem',
    marginBottom: '2rem',
    width: '21rem',
    padding: '2rem',
    boxShadow: '1px 1px 5px 5px #000',
    textAlign: 'center !important'
}));

export const FotoPerfil  = styled('img')(({ theme }) => ({
    width: '5rem',
    height: '5rem',
    borderRadius: '3rem'
}));

export const NomePerfil   = styled("h1")(({ theme }) => ({
    fontSize: '1.5rem',
    color: 'white'
}));

export const BioPerfil   = styled("p")(({ theme }) => ({
    fontSize: '1rem',
    color: 'white'
}));

export const TodosRepositorios   = styled(Grid)(({ theme }) => ({
    border: '1px solid black',
    borderRadius: '3rem',
    margin: '1rem',
    boxShadow: '5px 5px 5px',
    height: '4rem',
    width: '15rem',
    textAlign: 'center !important'
}));

export const Repositorios  = styled('a')(({ theme }) => ({
padding:'0.4rem',
color: 'white',
fontSize:' 0.8rem',
textDecoration:'none'
}));