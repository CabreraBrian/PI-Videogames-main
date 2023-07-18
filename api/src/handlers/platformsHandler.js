const { getApiPlatforms } = require("../controllers/getApiPlatforms")

const getPlatforms = async (req, res) =>{
    try {
        const response = await getApiPlatforms();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {getPlatforms};