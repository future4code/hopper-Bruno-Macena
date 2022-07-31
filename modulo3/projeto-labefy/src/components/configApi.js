import axios from "axios";

export default axios.create({
    baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    
    headers: {
        Authorization: "bruno-macena-hopper"
    }
})