
// object creation
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    

    }

    getName(){
        // returns the name of the object
        return this.name
    }
    getId(){
        // returns the name of the object
        return this.id
    }
    getEmail(){
        // returns the name of the object
        return this.email
    }
    getRole(){
        // returns the name of the object
        return this.role = 'Employee'
    }

}





module.exports = Employee