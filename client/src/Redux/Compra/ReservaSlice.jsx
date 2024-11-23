import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    numeroPersonas: 0,
    fecha: '',
    hora: '',
    numeroMesa: "",
    detalles: [
        {
            alergia:" ",
            diaFestivo: " ",
        }
    ],
}

const ReservaSlice = createSlice({
    name: 'reserva',
    initialState,
    reducers: {
        setNombre: (state, action) => {
            state.nombre = action.payload;
        },
        setApellido: (state, action) => {
            state.apellido = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setTelefono: (state, action) => {
            state.telefono = action.payload;
        },
        setNumeroPersonas: (state, action) => {
            state.numeroPersonas = action.payload;
        },
        setFecha: (state, action) => {
            state.fecha = action.payload;
        },
        setHora: (state, action) => {
            state.hora = action.payload;
        },
        setNumeroMesa: (state, action) => {
            state.numeroMesa = action.payload;
        },
        setDetalles: (state, action) => {
            state.detalles = action.payload;
        },
    }
});

export const { setNombre, setApellido, setEmail, setTelefono, setNumeroPersonas, setFecha, setHora, setNumeroMesa, setDetalles } = ReservaSlice.actions;
export default ReservaSlice.reducer;