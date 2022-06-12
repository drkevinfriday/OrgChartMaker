// import the class

const Employee = require('../lib/Employee.js');


test('creates a employee object and assigns',()=>{
    const employee = new Employee('Tom',13,'tom@tom.com');

    expect(employee.name).toBe('Tom')
    expect(employee.id).toBe(13)
    expect(employee.email).toBe('tom@tom.com')
   
})

test('test the employee function to get name', ()=>{
    const employee = new Employee('Tom',13,'tom@tom.com','');
    expect(employee.getName()).toEqual(expect.any(String))
})
test('test the employee function to getId', ()=>{
     const employee = new Employee('Tom',13,'tom@tom.com');
    expect(employee.getId()).toEqual(expect.any(Number))
})
test('test the employee function to get Email', ()=>{
     const employee = new Employee('Tom',13,'tom@tom.com');
    expect(employee.getEmail()).toEqual(expect.any(String))
})
test('test the employee function to get role', ()=>{
     const employee = new Employee('Tom',13,'tom@tom.com');
    expect(employee.getRole()).toBe('Employee')
})


