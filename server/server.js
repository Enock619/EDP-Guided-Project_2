import express from 'express'

const app=express();
const PORT=3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/planet', async(req,res) => {
    try{
        const planets= {};
        res.json(planets);
    } catch(err){
        console.err("Error;", err)
    }
})