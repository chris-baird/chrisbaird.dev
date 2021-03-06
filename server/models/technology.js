import mongoose from "mongoose"
const Schema = mongoose.Schema;

const TechnologySchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    technologyName: {
        type: String,
        required: true
    }
})

const TechnologyModel = mongoose.model("technology", TechnologySchema);

export default TechnologyModel;