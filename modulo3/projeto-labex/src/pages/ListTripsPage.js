import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {
  const navigate = useNavigate();
    return (
      <>
        <h1><u>List Trips Page</u></h1>

        <button onClick={() => navigate("/trips/application")}>Se inscrever</button>
        <Header/>
      </>
    );
  };
  
  export default ListTripsPage;