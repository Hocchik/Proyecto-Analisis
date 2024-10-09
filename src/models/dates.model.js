import mongoose from 'mongoose'

const DatesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    
    date:{
        type: Date,
        required: true,
        unique: true
    },

    horarios:{
        type: Array,
        required: true,
        default:[]
    }
 }
)

export default mongoose.model('Dates', DatesSchema)