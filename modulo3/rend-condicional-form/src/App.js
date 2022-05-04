import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styledComponents from "styled-components";
const Page = styledComponents.div`
display: flex;
align-items: center;
flex-direction: column;
button{ 
  margin-left: -80px;
  margin-top: 30px;
}
background: linear-gradient(to right, #0099f7, #f11712);
`
class App extends React.Component {
  state = {
    etapa: 1,

  }
  trocaEtapa = () => {
    if (this.state.etapa <= 3) {
      this.setState({ etapa: this.state.etapa + 1 });
    }
  }

  render() {
    let firstPage;

    switch (this.state.etapa) {
      case 1:
        firstPage = <Etapa1 />;
        break;

      case 2:
        firstPage = <Etapa2 />
        break;

      case 3:
        firstPage = <Etapa3 />
        break;

      case 4:
        firstPage = <Final />
        break;
    }
    return (
      <Page>
        {firstPage}
        {
          this.state.etapa < 4 && <button onClick={this.trocaEtapa}>Próxima Etapa</button>}
      </Page>
    );
  }
}


export default App;
