import TechnologyModel from "../models/technology.js"
export default {
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
      const dBTechnology = await TechnologyModel.create({
        imageUrl: req.files[0].path,
        technologyName: req.body.technologyName,
      });
      res.json(dBTechnology);
    } catch (error) {
      res.json(error);
    }
  },
};
