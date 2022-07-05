import express from 'express'
var eventRouter = express.Router()
import customerController from '../controllers/customer-controller.js'

// GET /api/events
eventRouter.get('/', function(req, res) {
  customerController.getAllCustomers(req, res)
})
  // GET /api/events/:event_id
  eventRouter.get('/:event_id', function(req, res) {
    customerController.getCustomerByID(req, res)
  })
  // POST /api/events
  eventRouter.post('/', function(req, res) {
    customerController.postCustomers(req, res)
  })
  // DELETE /api/events/:event_id
  eventRouter.delete('/:event_id', function(req, res) {
    customerController.deleteCustomerByID(req, res)
  })

  export default customerRouter