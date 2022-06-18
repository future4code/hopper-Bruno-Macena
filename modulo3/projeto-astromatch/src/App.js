import { useState } from "react";
import Home from "./components/Home"
import Match from "./components/Match";


function App() {
  const [page, setPage] = useState('choose')


  const changePage = () => {
    if (page === 'choose') {
    return <Home
    matchPage={pageMatch}
    />

    } else if (page === 'matches') {
      return <Match
      choosePage={pageChoose}
      />
    }
  } 

  const pageMatch = () => {
    setPage('match')
  }

  const pageChoose = () => {
    setPage('choose')
  }
  

  return (
    <div>
      
    {changePage()}
    </div>
  );
}

export default App;