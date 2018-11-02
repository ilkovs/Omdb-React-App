import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// Using ?s= instead of ?t= is limiting the data to title, year and type
const url = "https://www.omdbapi.com/?s=";
const url2 = "&r=json&apikey="
const APIkey = `${process.env.REACT_APP_API_KEY}`;


export default {
    search: function(query) {
        return axios.get(url + query + url2 + APIkey);
    }
};


