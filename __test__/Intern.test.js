const Intern = require('../lib/Intern.js');

test('creates a manager object and assigns',()=>{
    const intern = new Intern('Tom',13,'tom@tom.com','SchoolUniversity')
    

    expect(intern.name).toBe('Tom')
    expect(intern.id).toBe(13)
    expect(intern.email).toBe('tom@tom.com')
   
   
})

test('test the intern function to get name', ()=>{
    const intern = new Intern('Tom',13,'tom@tom.com','SchoolUniversity')
    expect(intern.getName()).toEqual(expect.any(String))
    
})
test('test the intern function to getId', ()=>{
    const intern = new Intern('Tom',13,'tom@tom.com','SchoolUniversity')
    expect(intern.getId()).toEqual(expect.any(Number))
})
test('test the intern function to get Email', ()=>{
    const intern = new Intern('Tom',13,'tom@tom.com','SchoolUniversity')
    expect(intern.getEmail()).toEqual(expect.any(String))
})
test('test the intern function to get role', ()=>{
    const intern = new Intern('Tom',13,'tom@tom.com','SchoolUniversity')
    expect(intern.getRole()).toBe('Intern')
})
