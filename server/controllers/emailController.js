const EmailModel = require("../models/email");
module.exports = {
  getEmails: async (req, res) => {
    try {
      const dbEmail = await EmailModel.find();
      res.json(dbEmail);
    } catch (error) {
      res.json(error);
    }
  },
  createEmail: async (req, res) => {
    try {
      const dbEmail = await EmailModel.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      });
      res.json(dbEmail);
    } catch (error) {
      res.json(error);
    }
  },
};
