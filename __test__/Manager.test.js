const Manager = require('../lib/Manager.js');

test('creates a manager object and assigns',()=>{
    const manager = new Manager('Tom',13,'tom@tom.com','555-555-8888');


    expect(manager.name).toBe('Tom')
    expect(manager.id).toBe(13)
    expect(manager.email).toBe('tom@tom.com')
    expect(manager.officeNumber).toBe('555-555-8888')
   
   
})

test('test the manager function to get name', ()=>{
    const manager = new Manager('Tom',13,'tom@tom.com','555-555-8888');
    expect(manager.getName()).toEqual(expect.any(String))
    
})
test('test the manager function to getId', ()=>{
    const manager = new Manager('Tom',13,'tom@tom.com','555-555-8888');
    expect(manager.getId()).toEqual(expect.any(Number))
})
test('test the manager function to get Email', ()=>{
    const manager = new Manager('Tom',13,'tom@tom.com','555-555-8888');
    expect(manager.getEmail()).toEqual(expect.any(String))
})
test('test the manager function to get role', ()=>{
    const manager = new Manager('Tom',13,'tom@tom.com','555-555-8888');
    expect(manager.getRole()).toBe('Manager')
})
