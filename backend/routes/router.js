const express = require("express");
const router = express.Router();
const student = require("../models/StudentSchema");

//Add new student
router.post("/addAStudent", async (req, res) => {
     const {name, email, subject, country, state, age, gender, languages} =  req.body;

     if( !name || !email ||!subject  || !age || !gender || !country || !state || languages.length === 0 || subject==="Select" || country==="Select" || state==="Select"){
        return res.status(404).send("plz fill the all required fields")
     }
        const StudentPresent = await student.findOne({email:email});
        if(StudentPresent){
            res.status(404).send("Invalid email id or email already exist")
        }else{
            student.create(req.body)
            .then(student => res.json("Student added successfully"))
            .catch(err => res.status(404).json("Student not added"))
        }
});


//Get all exist students
router.get("/getAllStudents", (req, res) => {
    student.find()
    .then(students => res.json(students))
    .catch(arr => res.status(404).json({noStudentFound:"No students found"}))
});

//Delete a student
router.delete("/delete/:id", (req, res) => {
        student.findByIdAndDelete(req.params.id)
        .then(student => res.json("Deleted Successfully"))
        .catch(err => res.json(err))
})

//Get indivisual student
router.get('/getOneStudent/:id', (req,res) => {
    student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(404).json({noStudentFound: "No Student Found"}))
})

//Update a exist student 
router.patch("/update/:id", (req, res) => {
    const {name, email, subject, country, state, age, gender, image, languages} =  req.body;

     if( !name || !email ||!subject  || !age || !gender || !country || !state || languages.length === 0 || subject==="Select" || country==="Select" || state==="Select"){
       return res.status(404).send("plz fill the all required fields")
    }
           student.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        })
        .then(student => res.json("Updated Successfully"))
        .catch(err => res.json(err)) 
    })


module.exports  = router;
