import { useEffect, useState } from "react";
import configProject from './components/config-project';
import axios from 'axios';

export default function App() {

  // const [perfil, setPerfil] = useState("");
  // const [telainicial, setTelaInicial] = useState("");

  // useEffect(() => {

  //   mostrarPerfil();
  // }, []);

  // const mostrarPerfil = async () => {
  //   try {
  //     const response = await configProject.get("person");
  //     setTelaInicial(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

    


  function App() {
    return (
      <div className="App">
        <button>Mach</button>
        <button>No Mach</button>
        <button>Reset</button>
      </div>
    );
  }
}
