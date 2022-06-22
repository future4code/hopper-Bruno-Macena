import Header from "../components/Header";
import axios from "axios";
import { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  useProtectedPage();
  useEffect(() => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-macena-hopper/trip/:id";

    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };

    axios
      .get(URL, headers)
      .then((res) => {
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
    return (
      <>
      <h1><u>Trip Details Page</u></h1>
        
      <h2><u>Detalhes </u></h2>

        <Header/>
      </>
    );
  };

  
  export default TripDetailsPage;