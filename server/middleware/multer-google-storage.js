var multer = require("multer");
var multerGoogleStorage = require("multer-google-storage");
var uploadHandler = multer({
  storage: multerGoogleStorage.storageEngine({
    bucket: process.env.GCS_BUCKET,
    keyFilename: process.env.GCS_KEYFILE,
    projectId: process.env.GCLOUD_PROJECT,
  }),
});

module.exports = uploadHandler;
