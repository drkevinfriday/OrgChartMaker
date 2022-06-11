const Employee = require('../lib/Employee.js');


test('creates a employee object and assigns',()=>{
    const employee = new Employee('Tom',13,'tom@tom.com');

    expect(employee.name).toBe('Tom')
    expect(employee.id).toBe('13')
    expect(employee.email).toBe('tom@tom.com')

})


