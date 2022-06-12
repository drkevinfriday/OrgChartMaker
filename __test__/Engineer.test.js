const Engineer = require('../lib/Engineer');

test('creates a manager object and assigns',()=>{
    const engineer = new Engineer('Tom',13,'tom@tom.com', 'githubUser');
    

    expect(engineer.name).toBe('Tom')
    expect(engineer.id).toBe(13)
    expect(engineer.email).toBe('tom@tom.com')
    expect(engineer.github).toBe('githubUser')
   
   
})

test('test the Engineer function to get name', ()=>{
    const engineer = new Engineer('Tom',13,'tom@tom.com', 'githubUser');
    expect(engineer.getName()).toEqual(expect.any(String))
    
})
test('test the Engineer function to getId', ()=>{
    const engineer = new Engineer('Tom',13,'tom@tom.com', 'githubUser');
    expect(engineer.getId()).toEqual(expect.any(Number))
})
test('test the Engineer function to get Email', ()=>{
    const engineer = new Engineer('Tom',13,'tom@tom.com', 'githubUser');
    expect(engineer.getEmail()).toEqual(expect.any(String))
})
test('test the Engineer function to get role', ()=>{
    const engineer = new Engineer('Tom',13,'tom@tom.com', 'githubUser');
    expect(engineer.getRole()).toBe('Engineer')
})

module.exports = Engineer
