import axios from "axios";
import { useState, useEffect } from "react";
import Back from "../components/IMG/Back.png"

function Match(props) {
    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        getMatch()
    }, [])

    const getMatch = (() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brunomacena/matches`,{
            headers: {
                Authorization: 'bruno-macena-hopper'
            }
        })
        .then((res) => {
            setMatchList(res.data.match)
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    })

    const clear = (() => {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brunomacena/clear`,{
            headers: {
                Authorization: 'bruno-macena-hopper'
            }
        })
        .then((res) => {
            getMatch()
            
        })
        .catch((erro) => {
            console.log(erro.response)
        })
    })



    const matchYes = matchList.map((item) => {
        return (
            <div>
                <img src={item.photo}/>
                <p>{item.name}</p>
            </div>
        )
    })

    

    return (
        <div>
            <div>
                <img onClick={props.choosePage} src={Back}/>
                <h3> Match </h3>
                <button onClick={clear}>Limpar</button> 
            </div>
            {matchYes}
        </div>
    )
}

export default Match;