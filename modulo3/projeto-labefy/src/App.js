import api from "./components/configApi";
import { useEffect, useState } from "react";



export default function App() {
  const [nome, setNome] = useState("");
  const [resultados, setResultados] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [modal, setModal] = useState(false);
  const [playId, setPlayId] = useState("");
  const [input, setInput] = useState({
    name: "",
    artist: "",
    url: ""
  });

  useEffect(() => {
    handleGetAllPlayLists();
  }, []);

  const handleInput = (event) => {
    event.preventDefault();
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleInputValue = (event) => {
    setNome(event.target.value);
  };

  const handleCreatePlayList = async () => {
    const body = {
      name: nome
    };

    try {
      await api.post("/", body);
      alert("playlist criada com sucesso.");
    } catch (error) {
      if (error.response.data.message) {
        return alert(error.response.data.message);
      }
    } finally {
      setNome("");
    }
  };

  const handleGetAllPlayLists = async () => {
    try {
      const response = await api.get("/");
      setResultados(response.data.result.list);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDeletePlayList = async (id) => {
    try {
      await api.delete(`/${id}`);
      alert("playlist deletada com sucesso.");
      handleGetAllPlayLists();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleGetTracksInPlayLists = async (id) => {
    try {
      const response = await api.get(`/${id}/tracks`);
      setTracks(response.data.result.tracks);
    } catch (error) {
      console.log(error.response);
    }
  };

  const showModal = (value, playListId) => {
    setModal(value);
    setPlayId(playListId);
    setInput({});
  };

  const handleAddTrackToPlayList = async (id) => {
    const body = {
      name: input.name,
      artist: input.artist,
      url: input.url
    };

    try {
      await api.post(`${id}/tracks`, body);
      alert("track adicionada a playlist com sucesso.");
    } catch (error) {
      console.log(error.response);
    } finally {
      setModal(false);
    }
  };

  return (
    <div className="App">
      <input
        placeholder="nome playlist"
        value={nome}
        onChange={handleInputValue}
      />
      <button onClick={handleCreatePlayList}>enviar</button>

      {resultados.map((result) => {
        return (
          <div key={result.id}>
            <p>{result.name}</p>
            <button onClick={() => handleDeletePlayList(result.id)}>
              deletar
            </button>

            <button onClick={() => handleGetTracksInPlayLists(result.id)}>
              ver playlist
            </button>

            <button onClick={() => showModal(!modal, result.id)}>
              adicionar track
            </button>
          </div>
        );
      })}
      {tracks.map((result) => {
        console.log(result.url.replace("watch?v=", "embed?v="));
        return (
          <div key={result.id}>
            <p>{result.name}</p>

            <iframe
              src={result.url.replace("watch?v=", "embed/")}
              title={result.name}
              frameBorder="0"
            ></iframe>
          </div>
        );
      })}
      {modal && (
        <div>
          <input
            placeholder="nome"
            name="name"
            value={input.name}
            onChange={handleInput}
          />

          <input
            placeholder="artista"
            name="artist"
            value={input.artist}
            onChange={handleInput}
          />

          <input
            placeholder="url"
            name="url"
            value={input.url}
            onChange={handleInput}
            maxLength="43"
          />

          <button onClick={() => handleAddTrackToPlayList(playId)}>
            addTrack
          </button>
        </div>
      )}
    </div>
  );
}
