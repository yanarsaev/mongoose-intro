const { Router } = require('express')
const { studentsController } = require('../controllers/students.controller')


const router = Router()

router.get('/students', studentsController.getStudents)
router.post('/students', studentsController.addStudents)
router.delete('/students/:id', studentsController.deleteStudent)
router.patch('/students/:id', studentsController.updateStudent)

module.exports = router