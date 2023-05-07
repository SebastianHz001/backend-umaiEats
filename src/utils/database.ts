import mongoose from 'mongoose';
const db:string = 'umaiEats';
const port:string = '27017';
const host:string = 'localhost';

export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb://${host}:${port}/${db}`)
        .then(result=>console.log('Se conecto a mongodb '+ db))
        .catch(error=>console.log(error));
    }
}