const Student = require("../models/Student.model")

module.exports.studentsController = {
    getStudents: (req, res) => {
        Student.find({})
        .then((students) => res.json(students))
        .catch((error) => res.json(error.message))
    },

    addStudents: (req, res) => {
      const {name, phone, age} = req.body
      Student.create({name,phone,age})
      .then(() => res.json("Студент добавлен"))
      .catch(() => res.json("Error"))
    },

    deleteStudent: (req, res) => {
      Student.findByIdAndDelete(req.params.id)
      .then(() => res.json("Student deleted"))
      .catch(() => res.json("Error"))
    },

    updateStudent: (req, res) => {
      Student.findByIdAndUpdate(req.params.id, {name: req.body.name})
      .then(() => res.json("Updated"))
      .catch(() => res.json("Error"))
    }
}