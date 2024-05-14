import express from 'express'
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
const app=express();
const PORT=3000;

dotenv.config();
const url= process.env.MONGO_DB_URL;
const dbName= process.env.MONGO_DB;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// API gateway for planets.
app.get('/api/planet', async(req,res) => {
    
    try{
        const client= await MongoClient.connect(url);
        const dataBase= client.db(dbName);
        const collection = dataBase.collection(process.env.MONGO_DB_Planets_COLLECTION );
        const planets= await collection.find({}).toArray();
        res.json(planets);
    } catch(err){
        console.error("Error loading planets", err)
    }
})


// API gateway for characters.
app.get('/api/characters', async(req,res) => {
    
    try{
        const client= await MongoClient.connect(url);
        const dataBase= client.db(dbName);
        const collection = dataBase.collection(process.env.MONGO_DB_Characters_COLLECTION);
        const characters= await collection.find({}).toArray();
        res.json(characters);
    } catch(err){
        console.error("Error loading characters", err)
    }
})


// API gateway for films.
app.get('/api/films', async(req,res) => {
    
    try{
        const client= await MongoClient.connect(url);
        const dataBase= client.db(dbName);
        const collection = dataBase.collection(process.env.MONGO_DB_Film_COLLECTION);
        const films= await collection.find({}).toArray();
        res.json(films);
    } catch(err){
        console.error("Error loading films", err)
    }
})

app.get('/api/characters/:id', async(req,res) => {
    
    try{
        const client= await MongoClient.connect(url);
        const dataBase= client.db(dbName);
        const collection = dataBase.collection(process.env.MONGO_DB_Characters_COLLECTION);
        const {id} = req.params;
        const objectId = new ObjectId({id});
        console.log("The id requested is " + id);
        const characters= await collection.find({id:objectId}).toArray();
        
        console.log("The response from mongoDb is " + characters);

        res.json(characters);
    } catch(err){
        console.error("Error loading characters", err)
    }
})



