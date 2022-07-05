


const dataCleaner = {

  cleanCustomer: ( customer ) => {
    return {
      id: customer.CUSTOMER_ID,
      name: customer.CUSTOMER_NAME,
      password: customer.PASSWORD,
      email: customer.EMAIL 
    }
  },  

  cleanCustomers: ( customers ) => {
    var results = []
    for( const c in customers) {
      results.push(dataCleaner.cleanCustomer(customers[c]))
    }
    return results
  },

  cleanEvent: (event) => {
    return {
      id: event.EVENT_ID,
      code: event.EVENT_CODE,
      title: event.TITLE,
      description: event.DESCRIPTION
    }
  },

  cleanEvents: ( events ) => {
    var results = []
    for( const c in events) {
      results.push(dataCleaner.cleanEvent(events[c]))
    }
    return results
  },

  cleanRegistration: (registration) => {
    return {
      event_id: registration.EVENT_ID,
      id: registration.REGISTRATION_ID,
      notes: registration.NOTES,
      customer_id: registration.CUSTOMER_ID,
      registration_date: registration.REGISTRATION_DATE
    }
  },

  cleanRegistrations: ( registrations ) => {
    var results = []
    for( const c in registrations) {
      results.push(dataCleaner.cleanRegistration(registrations[c]))
    }
    return results
  }



}

export default dataCleaner