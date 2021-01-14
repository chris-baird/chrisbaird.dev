import EmailModel from "../models/email.js"
export default {
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
      EmailModel.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      });
      res.json(true);
    } catch (error) {
      res.json(false);
    }
  },
  deleteEmailById: async (req, res) => {
    try {
      const deletedEmail = await EmailModel.findByIdAndDelete(req.params.id);
      res.json(deletedEmail);
    } catch (error) {
      res.json(error);
    }
  },
};
