require("dotenv").config();
const axios = require("axios");
const { genres } = require("../models/GenresModel");
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;

const getGenres =  async () => {

};


module.exports = {getGenres};