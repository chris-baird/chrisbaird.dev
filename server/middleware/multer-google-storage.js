import * as multer from "multer";
import MulterGoogleCloudStorage from "multer-google-storage";

const uploadHandler = multer({
  storage: new MulterGoogleCloudStorage(),
});

module.exports = uploadHandler;
