import Dates from "../models/dates.model.js"
import {createAccessToken} from "../libs/jwt.js";

export const  bucleDB = async (req, res) => {
    
    try {

        // Obtén el primer documento (el más antiguo)
        const FirstDayAct = await Dates.find().sort({ date: 1 }).limit(1);
        let today = new Date(); // Inicializa today con la fecha actual
        today.setHours(0, 0, 0, 0); // Establece la hora a medianoche para comparación

        // Verifica si se encontró el primer documento
        if (FirstDayAct.length > 0) {
        // Compara la fecha del primer documento con la fecha de hoy
            const firstDate = new Date(FirstDayAct[0].date);
            firstDate.setHours(0, 0, 0, 0); // Establece la hora a medianoche para comparación

        if (firstDate.getTime() === today.getTime()) {
            // Elimina el documento si la fecha es igual a hoy
            await Dates.deleteOne({ _id: FirstDayAct[0]._id });
            console.log("Se eliminó el documento con la fecha de hoy.");
        } else {
            console.log("El primer documento no es igual a hoy.");
        }

        // Asigna today a la fecha del primer documento (si no fue eliminado)
        today = firstDate;
    } else {
        console.log("No se encontraron documentos en la colección Dates.");
        today = new Date(); // Si no hay documentos, usa la fecha actual
    }



        const diasactu = await Dates.countDocuments();
        console.log(diasactu)

        // Obtén el último documento
        const LastDayAct = await Dates.find().sort({ date: -1 }).limit(1);

        console.log(today.getDate())
        // Verifica si se encontró el último documento
        if (LastDayAct.length > 0) {
            today = LastDayAct[0].date; // Asigna la fecha del último documento
        } else {
            console.log("No se encontraron documentos en la colección Dates.");
        }
        console.log(today.getDate())

        
        for (let i= diasactu; i < 30; i++) {
            today.setDate(today.getDate() + 1);

            const Dayhavebeencreated = new Dates({
                name: today.toISOString().split('T')[0],
                date: new Date(today.getTime() + 0 * 24 * 60 * 60 * 1000), 
                horarios: []
            })

            await Dayhavebeencreated.save();
            const token = await createAccessToken({ id: Dayhavebeencreated._id });
        
            res.cookie("token", token);
        
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    res.json ({ message: "Bucle de creación de días" });

}

export const DeleteDBindex0 =  async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const FirstDay = Dates.find().sort({ date: 1 }).limit(1);

        if(today === FirstDay){
            Dates.findByIdAndDelete();
        }



    } catch (error) {
        
    }
}
