//Import base employee
const Employee = require('./Employee');

// Manager creation from base employee 

class Manager extends Employee {
    // constructors

    constructor(name, id, email, officeNumber){
    super(name, id, email);
    
    // extends the manager object to include an office number
    this.officeNumber = officeNumber
    this.role = 'Manager'
}

getRole(){
    // returns the name of the object
    return this.role
}
}

module.exports = Manager