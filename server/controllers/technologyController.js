const TechnologyModel = require('../models/technology')
module.exports = {
    getTechnologies: async (req, res) => {
        try {
            const dbTechnologies = await TechnologyModel.find()
            res.json(dbTechnologies)
        } catch (error) {
            res.json(error)
        }
    }
}