import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    
  return (
    <div>
    <button onClick={() => navigate("/")}>Voltar para o Início</button> 
    </div>
  );
};

export default Header;