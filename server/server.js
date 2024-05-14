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

app.get('/api/planet', async(req,res) => {
    
    try{
        const client= await MongoClient.connect(url);
        const dataBase= client.db(dbName);
        const collection = dataBase.collection(process.env.MONGO_DB_Planets_COLLECTION );
        const planets= await collection.find({}).toArray();
        res.json(planets);
    } catch(err){
        console.error("Error;", err)
    }
})