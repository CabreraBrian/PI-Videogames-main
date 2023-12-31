const { getApiGenres } = require("../controllers/getApiGenres")

const getGenres = async (req, res) =>{
    try {
        const response = await getApiGenres();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {getGenres};