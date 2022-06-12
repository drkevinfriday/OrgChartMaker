//Import base employee
const Employee = require('./Employee');

// Intern creation from base employee 

class Intern extends Employee {
    // constructors

    constructor(name, id, email, school){
    super(name, id, email);
    
    // extends the Intern object to include an office number
    this.school = school
    this.role = 'Intern'
}

getRole(){
    // returns the name of the object
    return this.role
}
getSchool(){
    // returns the name of the object
    return this.school
}
}

module.exports = Intern