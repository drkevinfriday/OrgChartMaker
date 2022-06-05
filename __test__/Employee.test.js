const Employee = require('../lib/Employee.js');


test('creates a employee object and assigns',()=>{
    const employee = new Employee('Tom');

    expect(employee.name).toBe('Tom')
    // expect(employee.id).toBe('13')
    // expect(employee.email).toBe('tom@tom.com')

})


module.exports = Employee;