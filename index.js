

// const {writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');

// turns the fucntion  in  page-template in to generatepage
const generatePage = require('./src/page-template');

const promptUser = () => {
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

    validate: gitHubInput => {
      if(gitHubInput){
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

    validate: gitHubInput => {
      if(gitHubInput){
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

    validate: gitHubInput => {
      if(gitHubInput){
      return true;
    } else {
      console.log("Please enter your github username!")
      return false;
      }
    }

  }
  ,
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like to enter some information about yourself for an "About" section?',
    default: true
  },

  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself',
    when: ({confirmAbout})=>{
      if(confirmAbout){
      return true
    } else {
      return false
      } 
    }
  }

])
}

// const promptTeam = teamData => {
 
//   console.log(`
// =================
// Add a New Project
// =================
// `);
// // If there's no 'projects' array property, create one
// if (!teamData.member) {
//     teamData.member = [];
// }

//   // If there's no 'projects' array property, create one

//   return inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'what is the  name of your project? ',
//       validate: NameInput =>{
//         if(NameInput){
//           return true
//         } else{
//           console.log('what is the  name of your project? ')
//           return false
//         }
//       }
  
//     }
//     ,
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Please provide a description of your project. (Required) ',
//       validate: descriptionInput =>{
//         if(descriptionInput){
//           return true
//         } else{
//           console.log('Please provide a description of your project')
//           return false
//         }
//       }
//     }
//     ,
//     {
//       type: 'checkbox',
//       name: 'languages',
//       message: 'What did you build this project with? (Check all that apply)',
//       choices: ['Javascript', 'HTML','CSS', 'ES6','jQuery', 'Bootstrap', 'Node']
  
//     }
//     ,
//     {
//       type: 'input',
//       name: 'link',
//       message: 'Enter the GitHub link to your project. (Required)',
//       validate: linkInput =>{
//         if(linkInput){
//           return true
//         } else{
//           console.log('Enter the GitHub link to your project. (Required)')
//           return false
//         }
//       }
//     }
//     ,
//     {
//       type: 'confirm',
//       name: 'feature',
//       message: 'Would you like to feature this project?',
//       default: false
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAddProject',
//       message: 'Would you like to enter another project?',
//       default: false
//     }
//   ])
//   .then(projectData => { 
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptProject(portfolioData);
//     } else {
//       return portfolioData;
//     }
//   });

//   };

  


promptUser()
.then(consol)




//   .then(promptProject)
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




