//Import base employee
const Employee = require('./Employee');

// Engineer creation from base employee 

class Engineer extends Employee {
    // constructors

    constructor(name, id, email, github){
    super(name, id, email);
    
    // extends the Engineer object to include an office number
    this.github = github
    this.role = 'Engineer'
}

getRole(){
    // returns the name of the object
    return this.role
}
getSchool(){
    // returns the name of the object
    return this.github
}
}

module.exports = Engineer