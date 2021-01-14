import multer from "multer"
import multerGoogleStorage from "multer-google-storage"
const uploadHandler = multer({
  storage: multerGoogleStorage.storageEngine({
    bucket: process.env.GCS_BUCKET,
    keyFilename: process.env.GCS_KEYFILE,
    projectId: process.env.GCLOUD_PROJECT,
  }),
});

export default uploadHandler;
