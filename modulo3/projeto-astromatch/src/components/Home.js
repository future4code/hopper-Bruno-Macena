import axios from "axios";
import { useState, useEffect } from "react";
// import Heart from "../components/IMG/Mach.png"
  
  function Home(props) {
    const [people, setPeople] = useState({})
  
  
    useEffect(() => {
      getProfileToChoose()
    }, [])
  
    const getProfileToChoose = (() => {
      axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brunomacena/person`, {
        headers: {
          Authorization: 'bruno-macena-hopper'
        }
      })
  
        .then((res) => {
          setPeople(res.data.profile)
        })
  
        .catch((erro) => {
          console.log(erro.response)
        })
    })
  
    const choosePerson = (() => {
      const body = { id: people.id, choice: true }
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/brunomacena/choose-person`, body, {
        headers: {
          Authorization: 'bruno-macena-hopper'
        }
      })
  
        .then((res) => {
          getProfileToChoose()
        })
  
        .catch((erro) => {
          console.log(erro.response)
        })
    })
  
  
  
    const profileChoose = <div>
      <div>
        <img src={people.photo}></img>
        <div>
          <h4>{people.name}, {people.age}</h4>
          <p>{people.bio}</p>
        </div>
      </div>
    </div>
  
  
    return (
      <div>
        <div>
          <h3> AstroMatch </h3>
          <img onClick={props.matchPage}  />
        </div>
        <div>
          {profileChoose}
        </div>
        <div>
          <button onClick={getProfileToChoose}>X</button>
          <button onClick={choosePerson}>♥</button>
        </div>
      </div>
    )
  }

export default Home;