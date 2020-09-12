const express = require('express')
const router = express.Router();
const personSchema = require('../../model/schema')

router.get('/res',async (req,res)=>{
    const person = await personSchema.find();
    res.send(person);
})

router.post('/res',async (req,res)=>{
    let person = new personSchema(req.body);
    await person.save();
    res.send(person)
})

router.delete('/res/:id',(req,res)=>{
    res.send("add new gradients"+req.params.id);
})


module.exports = router;