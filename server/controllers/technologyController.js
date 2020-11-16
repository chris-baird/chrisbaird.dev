const TechnologyModel = require("../models/technology");
module.exports = {
  getTechnologies: async (req, res) => {
    try {
      const dbTechnologies = await TechnologyModel.find();
      res.json(dbTechnologies);
    } catch (error) {
      res.json(error);
    }
  },
  createTechnology: async (req, res) => {
    try {
      const newDbTechnology = await TechnologyModel.create(req.body);
      res.json(newDbTechnology);
    } catch (error) {
      res.json(error);
    }
  },
};
