import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./filme.css"

import api from '../../service/api';
function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      async function loadFilme(){
        await api.get(`/movie/${id}`, {
          params: {
              api_key: "d5314587cf6520e31f96c1d7582fdf7f",
              language: "pt-BR",
          }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        alert('PAGINA NAO ENCONTRADA')
        navigate('/', {replace: true});
        return;
      })
    }
      loadFilme();

      return () =>{
        console.log("COMPONETE DESMONTADO")
      }

    },[navigate, id])

    function salvarFilme(){
      const minhaLista = localStorage.getItem("@primeAufa")
      let filmesSalvos = JSON.parse(minhaLista) || [];

      const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id )

      if(hasFilmes){
        alert("Esse filme já está na sua lista")
        return;
      }

      filmesSalvos.push(filme);
      localStorage.setItem('@primeAufa', JSON.stringify(filmesSalvos));
      alert("Filme salvo com sucesso!!")
    }

    if(loading){
      return(
        <div className="filme-info">
          <h1>Carregando detalhes do filme...</h1>
        </div>
      )
    }
    return(
        <div className="filme-info">
          <h1>{filme.title}</h1>

          <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="filme.title"></img> 

          <h3>Sinopse</h3>
          <span>{filme.overview}</span>

          <strong>Avaliação: {filme.vote_average} / 10</strong>

          <div className="area-button">
            <button onClick={salvarFilme}>Salvar</button>
            <button><a target="blank" href={`https://youtube.com/results?search_query=${filme.title} trailer`} >Trailer</a> </button>
          </div>
        </div>
        
    )
}

export default Filme;