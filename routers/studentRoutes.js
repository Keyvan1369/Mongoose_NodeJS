import express from 'express';
const studentRouter = express.Router();
import Student from '../models/student.js';


const studentRoutes = express.Router();

studentRoutes.get("/", async (req, res) => {
    try {
        const response = await Student.find();
        res.status(201).json(response);
    } catch(err){
        res.status(500).json({ error: "not any information" });
    }
})

studentRoutes.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const response = await Student.findById(id);
        res.status(201).json(response);
    } catch(err){
        res.status(404).json({ error: "doesn't exit" });
    }
})
  
studentRoutes.post("/", async (req, res) => {

    try {
        const {name, first_name, email} = req.body;
        const response = await Student.create({name, first_name, email});
        res.status(201).json(response)
    } catch(err){
        res.status(500).json({ error: 'Error' });
    }
})

studentRoutes.put("/:id", async (req, res) => {

    try {
        const {name, first_name, email} = req.body;
        const {id} = req.params;

        const response = await Student.findByIdAndUpdate(id, {name, first_name, email});
        if (!response) {
            res.status(404).json({ error: "doesn't exit" });
            return;
        }  
        res.status(201).json(response)

    } catch(err) {
        res.status(500).json({ message: "error", error: err.message });
    }
})
export default studentRoutes;