import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const registrationSchema = new Schema({
  EVENT_ID: Number,
  REGISTRATION_ID: Number,
  NOTES: String,
  CUSTOMER_ID: Number,
  REGISTRATION_DATE: Date
})

registrationSchema.plugin(sequence, {inc_field: 'REGISTRATION_ID'}) 

const Registration = model('Registration', registrationSchema )
export default Registration