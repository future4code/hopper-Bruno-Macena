import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1><u>HomePage</u></h1>
      
      <button onClick={() => navigate("/ListTripsPage")}>Ver todas as viagens</button> 
      <button onClick={() => navigate("/LoginPage")}>Área Administrativa</button> 
    </>
  );
};

export default HomePage;
    