import express from 'express'
var registrationRouter = express.Router()
import registrationController from '../controllers/customer-controller.js'

// GET /api/registrations
registrationRouter.get('/', function(req, res) {
    registrationController.getAllCustomers(req, res)
  })
// GET /api/registrations/:registrationID
registrationRouter.get('/:registrationID', function(req, res) {
    registrationController.getCustomerByID(req, res)
  })
// POST /api/registration
registrationRouter.post('/', function(req, res) {
    registrationController.postCustomer(req, res)
  })
// DELETE /api/registrations/:registrationID
registrationRouter.delete('/:registrationID', function(req, res) {
    registrationController.deleteCustomerByID(req, res)
  })
  
  export default registrationRouter