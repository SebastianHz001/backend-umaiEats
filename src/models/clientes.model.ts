import mongoose from 'mongoose';

export interface Cliente{
    "nombre" : string,
    "apellido": string,
    "email" : string,
    "password" : string,
    "fechaNacimiento" : string,
    "genero": string,
    "direccion": string,
    "telefono": string,
    "ordenes"?: Array<Orden>
}

export interface Orden{
    "_id": mongoose.Types.ObjectId,
    "nombre": string,
    "estado": string
}


