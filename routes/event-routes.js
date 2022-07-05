import express from 'express'
var eventRouter = express.Router()
import eventController from '../controllers/event-controller'

// GET /api/events
eventRouter.get('/', function(req, res) {
  eventController.getAllEvents(req, res)
})
  // GET /api/events/:event_id
  eventRouter.get('/:event_id', function(req, res) {
    eventController.getEventByID(req, res)
  })
  // POST /api/events
  eventRouter.post('/', function(req, res) {
    eventController.postEvent(req, res)
  })
  // DELETE /api/events/:event_id
  eventRouter.delete('/:event_id', function(req, res) {
    eventController.deleteEventByID(req, res)
  })

  export default eventRouter