import express from 'express'
var registrationRouter = express.Router()
import customerController from '../controllers/customer-controller.js'

// GET /api/registrations
registrationRouter.get('/', function(req, res) {
    customerController.getAllCustomers(req, res)
  })
// GET /api/registrations/:registrationID
registrationRouter.get('/:registrationID', function(req, res) {
    customerController.getCustomerByID(req, res)
  })
// POST /api/registration
registrationRouter.post('/', function(req, res) {
    customerController.postCustomer(req, res)
  })
// DELETE /api/registrations/:registrationID
registrationRouter.delete('/:registrationID', function(req, res) {
    customerController.deleteCustomerByID(req, res)
  })
  
  export default customerRouter