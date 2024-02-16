import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    auth:"Bearer nbcshbdc"
})

export default instance;

