const express = require ("express")

require ('dotenv').config () ;
const connectDB = require ("./config/connectDB");
const Car = require ("./model/car");


//add new car

const car = new Car ({
    name :"Toyota",
    price :8000 ,
})  
 car.save () .then (()=> console.log(car)).catch ((err)=> console.log(err))

 // find all cars
 const findCars =async()=> {
    try {
       const result = await car.find ({})
       console.log(result)
    } catch (error){
console.log(error) } }

findCars ()

//find car by name
const findByName =async() =>{
    try {
        let carName ="Toyota"
        const result = await car.find({name:carName})
        console.log ("result", result)
    } catch (error) {
        console.log(error)
    }
}
findByName()
const app = express ();
connectDB ();
const PORT = process.env.PORT
app.listen = (PORT,(err) => {
    err? console.log(err) : console.log (`server is runnig on port ${PORT}`) })