import mongoose from 'mongoose'


const ReservaSchema = new mongoose.Schema({
    
    Date:{
        type:Date,
        required: true
    },
    
    hora:{
        type: String,
        required: true
    },

    emailUser:{
        type: String
    }


 },{
    timestamps: true
}
)

export default mongoose.model('Reserva', ReservaSchema)