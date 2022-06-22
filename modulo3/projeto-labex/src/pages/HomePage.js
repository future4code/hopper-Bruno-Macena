import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
    <h1><u>HomePage</u></h1>
      
    <button onClick={() => navigate("/trips/list")}>Ver todas as viagens</button> 
    <button onClick={() => navigate("/login")}>Área Administrativa</button> 
    </>
  );
};

export default HomePage;
    