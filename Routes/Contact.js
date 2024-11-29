const express = require('express')
const Contact = require('../Models/Contact')

const contactRouter = express.Router()

contactRouter.post('/addContact',async(req,res)=>{
    try {

        var found = await Contact.findOne({email : req.body.email})

        if(found){
            return res.status(400).send({msg : 'Email already exist'})
        }

        const NovContact = new Contact(req.body)

        await NovContact.save()

        res.status(200).send({msg : 'Contact Added',NovContact})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch nzido'})
    }
})

contactRouter.get('/getContacts',async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg :'Contacts list',contacts})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch njib'})
    }
})

contactRouter.delete('/deleteContact/:id',async(req,res)=>{
    try {
        
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send({msg : 'Contact Deleted'})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch nfasa5'})
    }
})

contactRouter.put('/updateContact/:id',async(req,res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send({msg : "Contact updated"})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch nupdati'})
    }
})

contactRouter.get('/getOneContact/:id',async(req,res)=>{
    try {
        const {id} = req.params

        const found = await Contact.findById(id)

        res.status(200).send({msg :'Contact',found})
    } catch (error) {
        res.status(500).send({msg : 'Manajmch njib'})
    }
})

module.exports = contactRouter