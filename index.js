

// const {writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');


// turns the fucntion  in  page-template in to generatepage
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generate-page.js');

const teamArray = [];



const promptManager = () => {
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: `what is your  Team manager's name`,
    validate: nameInput => {
      if(nameInput){
      return true;
    } else {
      console.log("Please enter your name!")
      return false;
      }
    }

  }
  ,
  {
    type: 'input',
    name: 'id',
    message: 'Please enter your employee ID?',

    validate: idInput => {
      if(idInput){
      return true;
    } else {
      console.log("Please enter your employee ID?")
      return false;
      }
    }

  }
  ,
  {
    type: 'input',
    name: 'email',
    message: 'Please enter a email address.',

    validate: emailInput => {
      if(emailInput){
      return true;
    } else {
      console.log("Please enter a email address.")
      return false;
      }
    }

  }
  ,
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter a office number address',

    validate: officeNumberInput => {
      if(officeNumberInput){
      return true;
    } else {
      console.log("Please enter your github username!")
      return false;
      }
    }

  }

])
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
  console.log(manager)
  teamArray.push(manager)
  


})

}

const promptEmployee =()=>{
  inquirer.prompt([
    {
      type: 'list',
      name: 'EmployeeType',
      message: `what type of employee would you like to create`,
      choices: ['Engineer', 'Intern']
    },
    
    {
      type: 'input',
      name: 'name',
      message: `what is your Employee's name`,
      validate: nameInput => {
        if(nameInput){
        return true;
      } else {
        console.log("Please enter your name!")
        return false;
        }
      }
  
    }
    ,
    {
      type: 'input',
      name: 'id',
      message: 'Please enter your employee ID?',
  
      validate: idInput => {
        if(idInput){
        return true;
      } else {
        console.log("Please enter your employee ID?")
        return false;
        }
      }
  
    }
    ,
    {
      type: 'input',
      name: 'email',
      message: 'Please enter a email address.',
  
      validate: emailInput => {
        if(emailInput){
        return true;
      } else {
        console.log("Please enter a email address.")
        return false;
        }
      }
  
    },

    {
      type: 'input',
      name: 'github',
      message: 'Provide your github username',
      when: ({EmployeeType})=>{
        if(EmployeeType === 'Engineer'){
        return true
      } else {
        return false
        } 
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Provide your school name. ',
      when: ({EmployeeType})=>{
        if(EmployeeType ==='Intern'){
        return true
      } else {
        return false
        } 
      }
    },

    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to enter another Employee?',
      default: false
    }
  ])
  .then((answers)=>{
    if(answers.EmployeeType ==='Engineer'){
      const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)

      teamArray.push(engineer)
    } else{ const intern = new Intern (answers.name, answers.id, answers.email, answers.school)

      teamArray.push(intern)
    }

    if(answers.confirmAddEmployee){
      promptEmployee()
    }else{writeFile(generatePage(teamArray))}
    
    return
    

  })
  
}






promptManager()
.then(promptEmployee)





// .then(()=>{
//   (generatePage(teamArray))
// })


// .then(pageHTML=>{
//   return writeFile(pageHTML)
// })







//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });


// console.log(generatePage(name, github));

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
    
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });






// console.log(profileDataArgs)


// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';


// const printProfileData = profileDataArr => {
//     // This...
//     // for (let i = 0; i < profileDataArr.length; i += 1) {
//     //   console.log(profileDataArr[i]);
//     // }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };






//   //calls the previous function with profileData args
//   printProfileData(profileDataArgs);


// // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

// var one = 'one: declared outside the block';

// if (true === true) {
//   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
//   console.log(one); // prints 'one: declared inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

// let two = 'two: declared outside the block';

// if (true === true) {
//   let two = 'two: declared inside the block';
//   console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.



// const generatePage = () => 'Name: Jane, Github: janehub';




