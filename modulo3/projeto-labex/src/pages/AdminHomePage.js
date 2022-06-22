import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();
    return (
      <>
      <h1><u>Admin Home Page</u></h1>
      <button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</button> 
      <button onClick={() => navigate("/admin/trips/:id")}>Detalhes das Viagens</button> 
      <Header/>
      </>
    );
  };
  
  export default AdminHomePage;